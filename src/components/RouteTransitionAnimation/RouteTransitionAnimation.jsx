import { useScrollLock } from '@base-ui/utils/useScrollLock';
import { use } from 'react';

import { RouteTransitionAnimationContext } from '../../context/RouteTransitionAnimationContext';
import AnimatedOverlay from './AnimatedOverlay';

function RouteTransitionAnimation({ location }) {
  const { isAnimating, stopAnimation } = use(RouteTransitionAnimationContext);
  useScrollLock(isAnimating);

  return isAnimating && <AnimatedOverlay location={location} onFinished={stopAnimation} />;
}

export default RouteTransitionAnimation;
