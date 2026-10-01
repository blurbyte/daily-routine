import { render } from '@testing-library/react';

import Cross from '../Cross';

describe('COMPONENT - Icons Cross', () => {
  it('renders correctly', () => {
    const { container } = render(<Cross />);

    expect(container).toMatchSnapshot();
  });
});
