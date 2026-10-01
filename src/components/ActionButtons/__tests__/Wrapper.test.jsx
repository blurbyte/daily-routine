import { render } from '@testing-library/react';

import Wrapper from '../Wrapper';

describe('COMPONENT - ActionButtons Wrapper', () => {
  it('renders correctly', () => {
    const { container } = render(<Wrapper />);

    expect(container).toMatchSnapshot();
  });
});
