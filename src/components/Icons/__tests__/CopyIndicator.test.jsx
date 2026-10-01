import { render } from '@testing-library/react';

import CopyIndicator from '../CopyIndicator';

describe('COMPONENT - Icons CopyIndicator', () => {
  it('renders correctly', () => {
    const { container } = render(<CopyIndicator />);

    expect(container).toMatchSnapshot();
  });
});
