import PropTypes from 'prop-types';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import Error from '../Error';

function ErrorBoundary({ children }) {
  return <ReactErrorBoundary fallback={<Error />}>{children}</ReactErrorBoundary>;
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
