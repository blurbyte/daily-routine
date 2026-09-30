const MAX_LENGTH = 220;
const OMISSION = '...';

function trimQuote(quote) {
  if (quote.length <= MAX_LENGTH) {
    return quote;
  }

  const cut = quote.slice(0, MAX_LENGTH - OMISSION.length);
  if (quote[cut.length] === ' ') {
    return cut + OMISSION;
  }

  const lastSpace = cut.lastIndexOf(' ');

  return (lastSpace > -1 ? cut.slice(0, lastSpace) : cut) + OMISSION;
}

export default trimQuote;
