import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { zIndexDefault } from '../../styles/designTokens';
import media from '../../styles/media';
import { SaltGrinder } from '../Icons';

const Wrapper = styled.span`
  width: 8.8rem;
  position: absolute;
  bottom: -0.9rem;
  right: -0.6rem;
  z-index: ${zIndexDefault};

  ${media.phone`
    width: 6.6rem;
    bottom: -0.9rem;
    right: 0.4rem;
  `};
`;

function SaltGrinderIcon(props) {
  return (
    <Wrapper {...props}>
      <SaltGrinder />
    </Wrapper>
  );
}

export default animated(SaltGrinderIcon);
