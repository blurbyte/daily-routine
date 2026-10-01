import { render } from '@testing-library/react';

import Gear from '../Gear';

describe('COMPONENT - Icons Gear', () => {
  it('renders correctly', () => {
    const { container } = render(<Gear />);

    expect(container).toMatchSnapshot();
  });
});
