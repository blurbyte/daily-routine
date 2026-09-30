import '../../styles/reset.css';

import { BrowserRouter as Router } from 'react-router';

import App from '../App';
import GlobalStyle from '../GlobalStyle';

function Root() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </>
  );
}

export default Root;
