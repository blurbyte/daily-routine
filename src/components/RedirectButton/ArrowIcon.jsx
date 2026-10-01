import styled, { keyframes } from 'styled-components';

import { zIndexDefault } from '../../styles/designTokens';
import media from '../../styles/media';
import { LongArrow } from '../Icons';

const nudgeAnimation = keyframes`
  0% { transform: translateX(0) }
  50% { transform: translateX(0.4rem) }
  100% { transform: translateX(0) }
`;

const Wrapper = styled.span`
  position: absolute;
  right: 1.4rem;
  bottom: 2.4rem;
  z-index: ${zIndexDefault};

  a:hover & {
    animation: ${nudgeAnimation} 400ms ease-in-out;
  }

  ${media.phone`
    bottom:  1.4rem;
  `};
`;

function Icon() {
  return (
    <Wrapper>
      <LongArrow />
    </Wrapper>
  );
}

export default Icon;
