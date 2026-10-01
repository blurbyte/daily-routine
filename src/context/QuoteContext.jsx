import PropTypes from 'prop-types';
import { createContext, useMemo, useState } from 'react';

const QuoteContext = createContext();

function QuoteProvider({ children }) {
  const [quote, setQuote] = useState(null);

  const value = useMemo(() => ({ quote, handleQuoteChange: setQuote }), [quote]);

  return <QuoteContext value={value}>{children}</QuoteContext>;
}

QuoteProvider.propTypes = {
  children: PropTypes.node
};

export { QuoteContext, QuoteProvider };
