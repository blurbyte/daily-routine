// TODO Figure out how to test it a bit more in depth @blurbyte

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { QuoteContext } from '../../../context/QuoteContext';
import QuoteBubble from '../QuoteBubble';

vi.mock('../BubbleButtons', () => ({ default: 'mock-bubble-buttons' }));
vi.mock('../Quote', () => ({ default: 'mock-quote' }));
vi.mock('../Wrapper', () => ({ default: 'mock-wrapper' }));
vi.mock('../BubbleTail', () => ({ default: 'mock-bubble-tail' }));
vi.mock('../SpeechBubbleArtwork', () => ({ default: 'mock-speech-bubble-artwork' }));

describe('COMPONENT - QuoteBubble', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter initialEntries={[{ key: 'utwyk7', pathname: '/frontend' }]}>
        <QuoteContext.Provider value={{ quote: 'Taylor Swift', handleQuoteChange: vi.fn() }}>
          <QuoteBubble />
        </QuoteContext.Provider>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
