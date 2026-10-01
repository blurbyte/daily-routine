import { render } from '@testing-library/react';

import AnimatedWhaleShadow from '../AnimatedWhaleShadow';

describe('COMPONENT - Characters Whale AnimatedWhaleShadow', () => {
  it('renders correctly', () => {
    const { container } = render(<AnimatedWhaleShadow />);

    expect(container).toMatchSnapshot();
  });
});
