import { act, fireEvent, render } from '@testing-library/react';
import { use } from 'react';
import { MemoryRouter, useLocation } from 'react-router';

import { FRONT_END_ROLE } from '../../constants/roles';
import { RouteTransitionAnimationContext, RouteTransitionAnimationProvider } from '../RouteTransitionAnimationContext';

const REDIRECT_URL = `/${FRONT_END_ROLE}`;

function MockConsumer() {
  const { isAnimating, animateAndRedirect, stopAnimation } = use(RouteTransitionAnimationContext);
  const { pathname } = useLocation();

  return (
    <>
      {isAnimating && <p>MockComponent</p>}
      <span data-testid="pathname">{pathname}</span>
      <button data-testid="animate-button" onClick={() => animateAndRedirect(REDIRECT_URL)} />
      <button data-testid="stop-button" onClick={stopAnimation} />
    </>
  );
}

function renderProvider() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <RouteTransitionAnimationProvider>
        <MockConsumer />
      </RouteTransitionAnimationProvider>
    </MemoryRouter>
  );
}

describe('COMPONENT - RouteTransitionAnimationProvider', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('should not render child component when "isAnimating" is "false"', () => {
    const { container } = renderProvider();

    expect(container.querySelector('p')).toBeNull();
  });

  it('should render child component when animateAndRedirect is called', () => {
    const { container, getByTestId } = renderProvider();

    fireEvent.click(getByTestId('animate-button'));

    expect(container.querySelector('p')).toHaveTextContent('MockComponent');
  });

  it('should redirect after a delay when animateAndRedirect is called', () => {
    const { getByTestId } = renderProvider();

    fireEvent.click(getByTestId('animate-button'));
    expect(getByTestId('pathname')).toHaveTextContent('/');

    act(() => {
      vi.runAllTimers();
    });

    expect(getByTestId('pathname')).toHaveTextContent(REDIRECT_URL);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it('should not render child component when stopAnimation is called', () => {
    const { container, getByTestId } = renderProvider();

    fireEvent.click(getByTestId('animate-button'));
    fireEvent.click(getByTestId('stop-button'));

    expect(container.querySelector('p')).toBeNull();
  });
});
