import { render } from '@testing-library/react';

import Twitter from '../Twitter';

describe('COMPONENT - Icons Twitter', () => {
  it('renders correctly', () => {
    const { container } = render(<Twitter />);

    expect(container).toMatchSnapshot();
  });
});
