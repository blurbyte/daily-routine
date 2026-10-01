import { render } from '@testing-library/react';

import BuilditLogo from '../BuilditLogo';

describe('COMPONENT - Icons BuilditLogo', () => {
  it('renders correctly', () => {
    const { container } = render(<BuilditLogo />);

    expect(container).toMatchSnapshot();
  });
});
