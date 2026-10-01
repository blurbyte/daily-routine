import { render } from '@testing-library/react';

import BubbleTail from '../BubbleTail';

vi.mock('../BubbleTailArtwork', () => ({ default: 'mock-bubble-tail-artwork' }));

describe('COMPONENT - QuoteBubble BubbleTail', () => {
  it('renders correctly', () => {
    const { container } = render(<BubbleTail />);

    expect(container).toMatchSnapshot();
  });
});
