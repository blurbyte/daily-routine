import { useSpring } from '@react-spring/web';
import { useState } from 'react';
import styled from 'styled-components';

import { colorOpaqueBlack, colorRed, fontMedium, fontWeightNormal } from '../../styles/designTokens';
import { BuilditLogo, Heart } from '../Icons';

const Wrapper = styled.div`
  display: flex;
  height: 3.6rem;
  white-space: nowrap;
  align-items: center;
  font-size: ${fontMedium};
  font-weight: ${fontWeightNormal};
  color: ${colorOpaqueBlack};
  -webkit-user-select: none;
  user-select: none;

  svg {
    display: inline-block;
    margin: 0 0.4rem;
  }
`;

function CraftedWithLove() {
  const [isAnimated, setIsAnimated] = useState(false);

  const { x } = useSpring({
    x: isAnimated ? 1 : 0,
    onRest: () => setIsAnimated(false),
    config: {
      tension: 320,
      friction: 36
    }
  });

  const iconAnimation = {
    color: x.to({ range: [0, 0.25, 1], output: [colorOpaqueBlack, colorRed, colorRed] }),
    transform: x.to({ range: [0, 0.5, 1], output: [1, 2.2, 1] }).to(x => `scale(${x})`)
  };

  return (
    <Wrapper onMouseEnter={() => setIsAnimated(true)}>
      Crafted with <Heart style={iconAnimation} /> by <BuilditLogo />
    </Wrapper>
  );
}

export default CraftedWithLove;
