import styled from 'styled-components';

import { colorWhite } from '../../styles/designTokens';

const Label = styled.label`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.secondaryColor};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: color 140ms ease-out;

  /* Selected state comes straight from the radio input inside */
  &:has(input:checked) {
    color: ${colorWhite};
  }
`;

export default Label;
