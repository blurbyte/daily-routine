import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { RouteTransitionAnimationContext } from '../../../context/RouteTransitionAnimationContext';
import LandingPage from '../LandingPage';
describe('COMPONENT - LandingPage', () => {
  it('renders correct elements', () => {
    const animateAndRedirect = () => {};
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <RouteTransitionAnimationContext.Provider value={{ animateAndRedirect }}>
          <LandingPage />
        </RouteTransitionAnimationContext.Provider>
      </MemoryRouter>
    );

    expect(container.querySelector('h1')).toHaveTextContent('Daily Scrum is coming!');
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('nav')).toBeDefined();
  });
});
