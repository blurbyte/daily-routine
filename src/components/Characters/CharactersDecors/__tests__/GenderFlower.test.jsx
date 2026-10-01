import { render } from '@testing-library/react';

import GenderFlower from '../GenderFlower';

describe('COMPONENT - Characters GenderFlower', () => {
  it('renders correctly', () => {
    const { container } = render(<GenderFlower />);

    expect(container).toMatchSnapshot();
  });
});
