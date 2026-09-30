import { animated, useTransition } from '@react-spring/web';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colorBlack, zIndexModalOverlay } from '../../styles/designTokens';

const Wrapper = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${colorBlack};
  z-index: ${zIndexModalOverlay};
`;

function Overlay({ isVisible, onClick }) {
  const transitions = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 0.6 },
    leave: { opacity: 0 },
    config: {
      mass: 1,
      tension: 240,
      friction: 24
    }
  });

  return transitions((style, item) => item && <Wrapper style={style} onClick={onClick} />);
}

Overlay.prototype = {
  isVisible: PropTypes.bool,
  onClick: PropTypes.func
};

export default Overlay;
