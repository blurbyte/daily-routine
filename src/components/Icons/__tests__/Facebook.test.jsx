import { render } from '@testing-library/react';

import Facebook from '../Facebook';

describe('COMPONENT - Icons Facebook', () => {
  it('renders correctly', () => {
    const { container } = render(<Facebook />);

    expect(container).toMatchSnapshot();
  });
});
