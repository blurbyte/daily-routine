import { render } from '@testing-library/react';

import ErrorBoundary from '../ErrorBoundary';

describe('COMPONENT - ErrorBoundary', () => {
  function ChildComponent() {
    return <p>I'm child component!</p>;
  }

  function ComponentWithError() {
    throw new Error('Something went wrong...');
  }

  beforeAll(() => {
    // React reports caught errors to the console
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it('renders the child component if there is no error', () => {
    const { container, queryByRole } = render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );

    expect(container.querySelector('p')).toHaveTextContent("I'm child component!");
    expect(queryByRole('alert')).toBeNull();
  });

  it('renders fallback Error component if there is error', () => {
    const { container, getByRole } = render(
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>
    );

    expect(container.querySelector('p')).toBeNull();
    expect(getByRole('alert')).toHaveTextContent('Oops, something went wrong.');
  });
});
