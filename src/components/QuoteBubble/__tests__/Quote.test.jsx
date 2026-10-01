import { render } from '@testing-library/react';

import Quote from '../Quote';

describe('COMPONENT - QuoteBubble Quote', () => {
  it('renders correctly', () => {
    const { container } = render(<Quote />);

    expect(container).toMatchSnapshot();
  });
});
