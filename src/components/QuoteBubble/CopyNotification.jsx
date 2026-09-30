import { animated, useTransition } from '@react-spring/web';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styled from 'styled-components';

import { zIndexArtworkPart } from '../../styles/designTokens';
import { CopyIndicator } from '../Icons';

const Wrapper = styled(animated.div)`
  position: absolute;
  top: 1.4rem;
  left: 1.4rem;
  transform-origin: 50% 100%;
  z-index: ${zIndexArtworkPart};
`;

function CopyNotification({ isVisible, onFinished }) {
  const transitions = useTransition(isVisible, {
    from: { opacity: 1, transform: 'translateY(0px) scale(1)' },
    enter: { opacity: 1, transform: 'translateY(0px) scale(1)' },
    leave: {
      opacity: 0,
      transform: 'translateY(-20px) scale(1.6)'
    },
    config: {
      tension: 180,
      friction: 36
    }
  });

  // Entering is instant (nothing to animate), so start leaving right after notification shows up
  useEffect(() => {
    if (isVisible) {
      onFinished();
    }
  }, [isVisible, onFinished]);

  return transitions(
    (style, item) =>
      item && (
        <Wrapper data-testid="copy-notification" style={style}>
          <CopyIndicator />
        </Wrapper>
      )
  );
}

CopyNotification.prototype = {
  isVisible: PropTypes.bool,
  onFinished: PropTypes.func
};

export default CopyNotification;
