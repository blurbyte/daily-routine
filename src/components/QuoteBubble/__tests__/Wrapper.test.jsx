import { render } from '@testing-library/react';

import Wrapper from '../Wrapper';

vi.mock('../SpeechBubbleArtwork', () => ({ default: 'mock-speech-bubble-artwork' }));

describe('COMPONENT - QuoteBubble Wrapper', () => {
  it('renders correctly', () => {
    const { container } = render(<Wrapper />);

    expect(container).toMatchSnapshot();
  });
});
