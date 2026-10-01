import { render } from '@testing-library/react';

import Button from '../Button';

describe('COMPONENT - Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });
});
