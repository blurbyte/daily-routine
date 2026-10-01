import { render } from '@testing-library/react';

import ArrowIcon from '../ArrowIcon';

vi.mock('../../Icons', () => ({
  LongArrow: 'mock-long-arrow'
}));

describe('COMPONENT - ArrowIcon', () => {
  it('renders correctly', () => {
    const { container } = render(<ArrowIcon />);

    expect(container).toMatchSnapshot();
  });
});
