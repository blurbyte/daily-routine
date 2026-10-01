import { render } from '@testing-library/react';

import SaltGrinderIcon from '../SaltGrinderIcon';

vi.mock('../../Icons', () => ({
  SaltGrinder: 'mock-salt-grinder'
}));

describe('COMPONENT - ActionButtons SaltGrinderIcon', () => {
  it('renders correctly', () => {
    const { container } = render(<SaltGrinderIcon />);

    expect(container).toMatchSnapshot();
  });
});
