import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const QuoteContext = createContext();

function QuoteProvider({ children }) {
  const [quote, setQuote] = useState(null);

  const handleQuoteChange = quote => setQuote(quote);

  return <QuoteContext value={{ quote, handleQuoteChange }}>{children}</QuoteContext>;
}

QuoteProvider.propTypes = {
  children: PropTypes.node
};

export { QuoteContext, QuoteProvider };
