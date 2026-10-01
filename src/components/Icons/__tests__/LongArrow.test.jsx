import { render } from '@testing-library/react';

import LongArrow from '../LongArrow';

describe('COMPONENT - Icons LongArrow', () => {
  it('renders correctly', () => {
    const { container } = render(<LongArrow />);

    expect(container).toMatchSnapshot();
  });
});
