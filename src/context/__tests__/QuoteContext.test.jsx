import { cleanup, fireEvent, render } from '@testing-library/react';

import { QuoteContext, QuoteProvider } from '../QuoteContext';

function renderQuoteContextConsumer(quote, handleQuoteChange) {
  return (
    <>
      {quote && <span>{quote}</span>}
      <button onClick={handleQuoteChange} />
    </>
  );
}

afterEach(cleanup);

describe('COMPONENT - QuoteContext', () => {
  it('renders corrently with default value', () => {
    const { container } = render(
      <QuoteProvider>
        <QuoteContext.Consumer>{({ quote }) => renderQuoteContextConsumer(quote)}</QuoteContext.Consumer>
      </QuoteProvider>
    );

    expect(container.querySelector('span')).toBeNull();
  });

  it('handles quote change correctly', () => {
    const { container } = render(
      <QuoteProvider>
        <QuoteContext.Consumer>
          {({ quote, handleQuoteChange }) => renderQuoteContextConsumer(quote, handleQuoteChange('Taylor Swift'))}
        </QuoteContext.Consumer>
      </QuoteProvider>
    );

    fireEvent.click(container.querySelector('button'));

    expect(container.querySelector('span')).toHaveTextContent('Taylor Swift');
  });
});
