import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { zIndexDefault } from '../../styles/designTokens';
import media from '../../styles/media';
import { Lightbulb } from '../Icons';

const Wrapper = styled.span`
  width: 8.8rem;
  position: absolute;
  bottom: -1rem;
  right: -0.8rem;
  z-index: ${zIndexDefault};

  ${media.phone`
    width: 6.6rem;
    bottom: -1rem;
    right: 0;
  `};
`;

function LightbulbIcon(props) {
  return (
    <Wrapper {...props}>
      <Lightbulb />
    </Wrapper>
  );
}

export default animated(LightbulbIcon);
