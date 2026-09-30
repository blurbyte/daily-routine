import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const QuoteContext = createContext();
const { Provider } = QuoteContext;

function QuoteProvider({ children }) {
  const [quote, setQuote] = useState(null);

  const handleQuoteChange = quote => setQuote(quote);

  return <Provider value={{ quote, handleQuoteChange }}>{children}</Provider>;
}

QuoteProvider.propTypes = {
  children: PropTypes.node
};

export { QuoteContext, QuoteProvider };
