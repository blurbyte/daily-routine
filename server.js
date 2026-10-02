import { join } from 'node:path';

import compression from 'compression';
import express from 'express';

const PORT = process.env.PORT || 3000;
const DIST_DIR = join(import.meta.dirname, 'dist');

function setCacheControl(res, path) {
  if (path.endsWith('.html')) {
    res.setHeader('Cache-Control', 'no-cache');
  }
}

const app = express();

app.disable('x-powered-by');
app.use(compression());

app.get('/healthcheck', (_req, res) => {
  res.send('OK');
});

// Hashed assets never change
// Missing ones are 404 instead of falling back to the app
app.use('/assets', express.static(join(DIST_DIR, 'assets'), { immutable: true, maxAge: '1y', fallthrough: false }));
app.use(express.static(DIST_DIR, { maxAge: '1h', setHeaders: setCacheControl }));

// Every other path is handled by the client side router
app.get('/{*path}', (_req, res) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.sendFile(join(DIST_DIR, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
