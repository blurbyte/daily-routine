import { render } from '@testing-library/react';

import Heart from '../Heart';

describe('COMPONENT - Icons Heart', () => {
  it('renders correctly', () => {
    const { container } = render(<Heart />);

    expect(container).toMatchSnapshot();
  });
});
