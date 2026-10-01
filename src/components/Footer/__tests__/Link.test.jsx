import { render } from '@testing-library/react';

import Link from '../Link';

describe('COMPONENT - Footer Link', () => {
  it('renders correctly', () => {
    const { container } = render(<Link />);

    expect(container).toMatchSnapshot();
  });
});
