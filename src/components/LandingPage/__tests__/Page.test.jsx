import { render } from '@testing-library/react';

import Page from '../Page';

describe('COMPONENT - LandingPage Page', () => {
  it('renders correctly', () => {
    const { container } = render(<Page>Taylor Swift</Page>);

    expect(container).toMatchSnapshot();
  });
});
