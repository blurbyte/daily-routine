import { render } from '@testing-library/react';

import Frame from '../Frame';

describe('COMPONENT - Characters Fox Frame', () => {
  it('renders correctly', () => {
    const { container } = render(<Frame />);

    expect(container).toMatchSnapshot();
  });
});
