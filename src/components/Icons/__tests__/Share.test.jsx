import { render } from '@testing-library/react';

import Share from '../Share';

describe('COMPONENT - Icons Share', () => {
  it('renders correctly', () => {
    const { container } = render(<Share />);

    expect(container).toMatchSnapshot();
  });
});
