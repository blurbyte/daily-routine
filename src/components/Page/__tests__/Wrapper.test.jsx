import { render } from '@testing-library/react';

import Wrapper from '../Wrapper';

describe('COMPONENT - Page Wrapper', () => {
  it('renders correctly', () => {
    const { container } = render(<Wrapper />);

    expect(container).toMatchSnapshot();
  });
});
