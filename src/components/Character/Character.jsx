import PropTypes from 'prop-types';
import { cloneElement, useContext } from 'react';
import { useLocation } from 'react-router';

import { QuoteContext } from '../../context/QuoteContext';
import { extractPose } from '../../utils/extractFromPath';
import ErrorBoundary from '../ErrorBoundary';

function Character({ children }) {
  const { pathname } = useLocation();
  const { quote } = useContext(QuoteContext);

  const pose = extractPose(pathname, quote);

  return <ErrorBoundary>{cloneElement(children, { pose })}</ErrorBoundary>;
}

Character.propTypes = {
  children: PropTypes.node
};

export default Character;
