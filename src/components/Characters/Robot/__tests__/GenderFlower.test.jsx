import { render } from '@testing-library/react';

import GenderFlower from '../GenderFlower';

vi.mock('../../CharactersDecors/GenderFlower', () => ({ default: 'mock-gender-flower' }));

describe('COMPONENT - Characters Robot GenderFlower', () => {
  it('renders correctly', () => {
    const { container } = render(<GenderFlower />);

    expect(container).toMatchSnapshot();
  });
});
