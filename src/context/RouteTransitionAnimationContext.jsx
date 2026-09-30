import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router';

const RouteTransitionAnimationContext = createContext();
const { Provider } = RouteTransitionAnimationContext;

function RouteTransitionAnimationProvider({ children }) {
  const REDIRECT_DELAY = 250;
  const navigate = useNavigate();

  function redirectWithDelay(url) {
    setTimeout(() => {
      // Restore scroll position to top of a page
      window.scrollTo(0, 0);
      navigate(url);
    }, REDIRECT_DELAY);
  }

  function animateAndRedirect(redirectUrl) {
    setIsAnimating(true);
    redirectWithDelay(redirectUrl);
  }

  function stopAnimation() {
    setIsAnimating(false);
  }

  const [isAnimating, setIsAnimating] = useState(false);

  return <Provider value={{ isAnimating, animateAndRedirect, stopAnimation }}>{children}</Provider>;
}

RouteTransitionAnimationProvider.propTypes = {
  children: PropTypes.node
};

export { RouteTransitionAnimationContext, RouteTransitionAnimationProvider };
