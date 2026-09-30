import { animated, useSpring } from '@react-spring/web';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import { colorWhite, zIndexModalOverlay } from '../../styles/designTokens';
import { theme } from '../../types';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: ${zIndexModalOverlay};
  overflow: hidden;

  /* Show app bar on desktop and tablet when window size is higher than whole character artwork */
  @media (min-height: 51.25em) and (min-width: 31.25em) {
    top: 6rem;
  }
`;

const FullScreenCurtain = styled(animated.div)`
  width: 100%;
  height: 160vh;
  background-color: ${colorWhite};
  left: 0;
  position: absolute;
  z-index: ${zIndexModalOverlay};
  opacity: 1;
  transform: scaleY(0) translateY(0);
  transform-origin: 0 0;
`;

const FullScreenBar = styled(FullScreenCurtain)`
  z-index: ${zIndexModalOverlay + 2};
  transform-origin: 100% 100%;
`;

const ThickBar = styled(animated.div)`
  width: 100%;
  height: 0;
  left: 0;
  position: absolute;
  z-index: ${zIndexModalOverlay + 3};
  transform: translateY(0);
`;

// Defined outside of the component on purpose
// New function passed on re-render would restart the animation and call `onRest` too early
async function coverAndRevealScreen(next) {
  await next({ transform: 'scaleY(1)' });
  await next({ transform: 'scaleY(0)' });
}

function AnimatedOverlay({ onFinished, theme }) {
  const { primaryColor } = theme;

  const fullScreenCurtainAnimation = useSpring({
    from: {
      transform: 'scaleY(0)'
    },
    to: coverAndRevealScreen,
    config: { mass: 2, tension: 160, friction: 22, precision: 0.1, clamp: true },
    onRest: onFinished
  });

  const fullScreenBarAnimation = useSpring({
    from: {
      transform: 'scaleY(0) translateY(50%)',
      opacity: 1,
      backgroundColor: primaryColor
    },
    to: {
      transform: 'scaleY(1) translateY(0%)',
      opacity: 0,
      backgroundColor: primaryColor
    },
    config: { tension: 140, friction: 24, clamp: true }
  });

  const thickBarAnimation = useSpring({
    from: {
      height: '0%',
      transform: 'translateY(-20vh)',
      backgroundColor: primaryColor
    },
    to: {
      height: '30%',
      transform: 'translateY(160vh)',
      backgroundColor: primaryColor
    },
    config: { tension: 300, friction: 140 }
  });

  return (
    <Wrapper>
      <FullScreenCurtain style={fullScreenCurtainAnimation} />
      <ThickBar style={thickBarAnimation} />
      <FullScreenBar style={fullScreenBarAnimation} />
    </Wrapper>
  );
}

AnimatedOverlay.propTypes = {
  onFinished: PropTypes.func.isRequired,
  theme: theme.isRequired
};

export default withTheme(AnimatedOverlay);
