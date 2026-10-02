import { join } from 'node:path';

import compression from 'compression';
import express from 'express';

const PORT = process.env.PORT || 3000;
const DIST_DIR = join(import.meta.dirname, 'dist');
const CANONICAL_ORIGIN = 'https://dailyroutine.blurbyte.com';

// Baseline security headers
function securityHeaders(_req, res, next) {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  next();
}

// Redirects *.fly.dev address to the real domain
function redirectToCanonicalHost(req, res, next) {
  if (req.hostname.endsWith('.fly.dev')) {
    res.redirect(301, CANONICAL_ORIGIN + req.originalUrl);
    return;
  }

  next();
}

// HTML is never cached, so a new deploy shows up right away
function setCacheControl(res, path) {
  if (path.endsWith('.html')) {
    res.setHeader('Cache-Control', 'no-cache');
  }
}

// Normalize away trailing slashes: /frontend/ -> /frontend
// Leaves the root "/" and preserves the query string
function stripTrailingSlash(req, res, next) {
  if (req.path.length > 1 && req.path.endsWith('/')) {
    const queryString = req.url.slice(req.path.length);
    res.redirect(308, req.path.slice(0, -1) + queryString);
    return;
  }

  next();
}

const app = express();

app.disable('x-powered-by');
app.use(compression());
app.use(securityHeaders);

app.get('/healthcheck', (_req, res) => {
  res.send('OK');
});

app.use(redirectToCanonicalHost);
app.use(stripTrailingSlash);

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
