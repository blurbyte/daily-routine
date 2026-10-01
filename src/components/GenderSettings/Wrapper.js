import styled from 'styled-components';

import { borderRadius, borderWidthThick, colorDarkPink, colorWhite } from '../../styles/designTokens';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 3.6rem;
  background-color: ${colorWhite};
  border: ${borderWidthThick} solid ${({ theme }) => theme.secondaryColor};
  border-radius: ${borderRadius};
  overflow: hidden;
  isolation: isolate;

  /* Single thumb sliding under selected option, instead of animating each option separately */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    background-color: ${({ theme }) => theme.secondaryColor};
    transition: transform 140ms ease-out;
    z-index: -1;
  }

  &:has(label:last-child input:checked)::before {
    transform: translateX(100%);
  }

  /* Only when navigating with keyboard */
  &:has(:focus-visible) {
    box-shadow: 0 0 0 0.6rem ${colorDarkPink};
  }
`;

export default Wrapper;
