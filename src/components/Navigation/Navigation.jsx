// Lays out naviagtion elements
// Each element is max. 1/3 of container width

import PropTypes from 'prop-types';
import { Children } from 'react';

import Wrapper from './Wrapper';

function Navigation({ children }) {
  const numberOfElements = Children.count(children);

  return <Wrapper $numberOfElements={numberOfElements}>{children}</Wrapper>;
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired
};

export default Navigation;
