// Button wrapper with all styles removed
// Useful for accessible action icons / target areas

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { borderRadius, colorDarkPink, colorPink } from '../../styles/designTokens';

const Styled = styled.button`
  position: relative;
  border: 0;
  margin: 0;
  padding: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4rem;
  min-height: 4rem;
  cursor: pointer;
  outline: 0;
  transition: all 150ms linear;
  border-radius: ${borderRadius};

  &.focus-visible {
    background-color: ${props => (props.$alternativeFocusStyle ? colorDarkPink : colorPink)};
  }
`;

function Hitbox({ alternativeFocusStyle, ...props }) {
  return <Styled $alternativeFocusStyle={alternativeFocusStyle} {...props} />;
}

Hitbox.propTypes = {
  alternativeFocusStyle: PropTypes.bool
};

export default Hitbox;
