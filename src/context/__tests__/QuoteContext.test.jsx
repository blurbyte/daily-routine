import { fireEvent, render } from '@testing-library/react';
import { use } from 'react';

import { QuoteContext, QuoteProvider } from '../QuoteContext';

function MockConsumer() {
  const { quote, handleQuoteChange } = use(QuoteContext);

  return (
    <>
      {quote && <span>{quote}</span>}
      <button onClick={() => handleQuoteChange('Taylor Swift')} />
    </>
  );
}

function renderProvider() {
  return render(
    <QuoteProvider>
      <MockConsumer />
    </QuoteProvider>
  );
}

describe('COMPONENT - QuoteContext', () => {
  it('renders correctly with default value', () => {
    const { container } = renderProvider();

    expect(container.querySelector('span')).toBeNull();
  });

  it('handles quote change correctly', () => {
    const { container } = renderProvider();

    fireEvent.click(container.querySelector('button'));

    expect(container.querySelector('span')).toHaveTextContent('Taylor Swift');
  });
});
