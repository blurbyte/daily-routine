import { render } from '@testing-library/react';

import Hitbox from '../Hitbox';

describe('COMPONENT - Hitbox', () => {
  it('renders correctly', () => {
    const { container } = render(<Hitbox />);

    expect(container).toMatchSnapshot();
  });
});
