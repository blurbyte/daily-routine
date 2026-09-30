// Blocks scrolling on page
// Most of time state of component such as isVisible, isAnimating should be passed

import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useLayoutEffect } from 'react';

function useLockBodyScroll(shouldLock = false) {
  useLayoutEffect(() => {
    if (shouldLock) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }

    return () => clearAllBodyScrollLocks();
  }, [shouldLock]);
}

export default useLockBodyScroll;
