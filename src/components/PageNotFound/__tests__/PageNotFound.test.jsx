import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { RouteTransitionAnimationContext } from '../../../context/RouteTransitionAnimationContext';
import PageNotFound from '../PageNotFound';
describe('COMPONENT - PageNotFound', () => {
  it('renders correct elements', () => {
    const animateAndRedirect = () => {};
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <RouteTransitionAnimationContext.Provider value={{ animateAndRedirect }}>
          <PageNotFound />
        </RouteTransitionAnimationContext.Provider>
      </MemoryRouter>
    );

    expect(container.querySelector('h1')).toHaveTextContent('404 - Page not found');
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
