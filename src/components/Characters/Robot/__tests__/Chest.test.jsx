import { render } from '@testing-library/react';

import Chest from '../Chest';

describe('COMPONENT - Characters Robot Chest', () => {
  it('renders correctly', () => {
    const { container } = render(<Chest />);

    expect(container).toMatchSnapshot();
  });
});
