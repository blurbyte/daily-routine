import { animated, useTransition } from '@react-spring/web';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colorWhite, zIndexModal } from '../../styles/designTokens';

const Wrapper = styled(animated.section)`
  height: 100%;
  width: 26rem;
  position: fixed;
  top: 0;
  right: 0;
  background-color: ${colorWhite};
  z-index: ${zIndexModal};
`;

function Panel({ isVisible, children }) {
  const transitions = useTransition(isVisible, {
    from: {
      transform: 'translateX(26rem)'
    },
    enter: {
      transform: 'translateX(0)'
    },
    leave: {
      transform: 'translateX(26rem)'
    },
    config: {
      mass: 1,
      tension: 340,
      friction: 40
    }
  });

  return transitions(
    (style, item) =>
      item && (
        <Wrapper data-testid="side-panel" style={style}>
          {children}
        </Wrapper>
      )
  );
}

Panel.prototype = {
  isVisible: PropTypes.bool,
  children: PropTypes.node
};

export default Panel;
