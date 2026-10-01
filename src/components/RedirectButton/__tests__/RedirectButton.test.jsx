import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { RouteTransitionAnimationContext } from '../../../context/RouteTransitionAnimationContext';
import RedirectButton from '../RedirectButton';
describe('COMPONENT - RedirectButton', () => {
  it('renders correctly', () => {
    const animateAndRedirect = vi.fn();

    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <RouteTransitionAnimationContext.Provider value={{ animateAndRedirect }}>
          <RedirectButton to={'taylor-swift'} data-testid="taylors-button">
            Taylor's Button
          </RedirectButton>
        </RouteTransitionAnimationContext.Provider>
      </MemoryRouter>
    );

    expect(getByTestId('taylors-button')).toHaveTextContent("Taylor's Button");

    fireEvent.click(getByTestId('taylors-button'));
    expect(animateAndRedirect).toHaveBeenCalledWith('taylor-swift');
  });
});
