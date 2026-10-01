import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { RouteTransitionAnimationContext } from '../../../context/RouteTransitionAnimationContext';
import RouteTransitionAnimation from '../RouteTransitionAnimation';

describe('COMPONENT - RouteTransitionAnimation', () => {
  it('renders correctly when "isAnimating" is  "true"', () => {
    const animateAndRedirect = () => {};
    const stopAnimation = () => {};
    const isAnimating = true;
    const theme = {
      primaryColor: '#fff',
      secondaryColor: '#222'
    };

    const { container } = render(
      <ThemeProvider theme={theme}>
        <RouteTransitionAnimationContext.Provider value={{ animateAndRedirect, isAnimating, stopAnimation }}>
          <RouteTransitionAnimation />
        </RouteTransitionAnimationContext.Provider>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
