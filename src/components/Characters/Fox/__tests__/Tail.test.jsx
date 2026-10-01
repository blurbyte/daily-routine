import { render } from '@testing-library/react';

import Tail from '../Tail';

describe('COMPONENT - Characters Fox Tail', () => {
  it('renders correctly', () => {
    const { container } = render(<Tail />);

    expect(container).toMatchSnapshot();
  });
});
