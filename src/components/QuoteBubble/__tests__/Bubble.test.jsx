import { render } from '@testing-library/react';

import Bubble from '../Bubble';

describe('COMPONENT - QuoteBubble Bubble', () => {
  it('renders correctly', () => {
    const { container } = render(<Bubble />);

    expect(container).toMatchSnapshot();
  });
});
