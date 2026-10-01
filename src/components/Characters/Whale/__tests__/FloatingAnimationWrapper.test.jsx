import { render } from '@testing-library/react';

import FloatingAnimationWrapper from '../FloatingAnimationWrapper';

describe('COMPONENT - Characters Whale FloatingAnimationWrapper', () => {
  it('renders correctly', () => {
    const { container } = render(<FloatingAnimationWrapper />);

    expect(container).toMatchSnapshot();
  });
});
