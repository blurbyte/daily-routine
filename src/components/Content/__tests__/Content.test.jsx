import { render } from '@testing-library/react';

import Content from '../Content';

describe('COMPONENT - Content', () => {
  it('renders correctly', () => {
    const { container } = render(<Content />);

    expect(container).toMatchSnapshot();
  });

  it('narrow content renders correctly', () => {
    const { container } = render(<Content narrow />);

    expect(container).toMatchSnapshot();
  });
});
