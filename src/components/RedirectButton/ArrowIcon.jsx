import styled from 'styled-components';

import { zIndexDefault } from '../../styles/designTokens';
import media from '../../styles/media';
import { LongArrow } from '../Icons';

const Wrapper = styled.span`
  position: absolute;
  right: 1.4rem;
  bottom: 2.4rem;
  z-index: ${zIndexDefault};

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
