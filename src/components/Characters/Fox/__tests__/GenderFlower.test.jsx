import { render } from '@testing-library/react';

import GenderFlower from '../GenderFlower';

vi.mock('../GenderFlower', () => ({ default: 'mock-gender-flower' }));

describe('COMPONENT - Characters Fox GenderFlower', () => {
  it('renders correctly', () => {
    const { container } = render(<GenderFlower />);

    expect(container).toMatchSnapshot();
  });
});
