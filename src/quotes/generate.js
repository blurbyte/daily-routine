import { convertToDigits, convertToNickname } from './encode';
import { FUTURE, PAST, PHRASES, PREFIX, ROLES } from './quotes';

export function getQuoteFromID(role, action, quoteID) {
  if (typeof quoteID != 'string') {
    return;
  }

  const actions = getActions();
  if (!actions.includes(action)) {
    return;
  }

  const digits = convertToDigits(quoteID);
  if (!Array.isArray(digits) || digits.length === 0) {
    return;
  }

  const expressionsAndIndexes = getOptions(role, action);
  if (!expressionsAndIndexes) {
    return;
  }

  if (expressionsAndIndexes.length !== digits.length) {
    return;
  }

  const expressions = expressionsAndIndexes.map((phrases, index) => phrases[digits[index] % phrases.length]).join(' ');

  return expressions;
}

export function getRandomQuoteID(role, action) {
  const [_, quoteID] = getRandomQuoteAndID(role, action);

  return convertToNickname(quoteID);
}

function getActions() {
  return Object.keys(PHRASES[PREFIX]);
}

function getOptions(role, action) {
  const roleLeaf = PHRASES[ROLES][role];
  const prefixLeaf = PHRASES[PREFIX][action];
  // This order is not fluid and affects proper encoding, decoding
  const arrayOfExpressions = [prefixLeaf[PAST], roleLeaf[PAST], prefixLeaf[FUTURE], roleLeaf[FUTURE]];
  if (arrayOfExpressions.includes(undefined)) {
    return [];
  }
  return arrayOfExpressions;
}

function getRandomQuoteAndID(role, action) {
  const sampleAndIndex = items => {
    const index = Math.floor(Math.random() * items.length);
    const item = items[index];

    return [item, index];
  };
  const samples = getOptions(role, action).map(sampleAndIndex);
  const expression = samples.map(([item]) => item).join(' ');
  const index = samples.map(([, itemIndex]) => itemIndex);

  return [expression, index];
}
