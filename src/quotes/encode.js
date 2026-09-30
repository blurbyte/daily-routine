import { ADJECTIVES, ADVERBS, NOUNS } from './nicknameParts';

// URL-NICKNAME ENCODING

// Domain assumes [0] -> repeating group, [1] -> static group
const DOMAIN = [[ADVERBS, ADVERBS, ADJECTIVES], NOUNS];
const REPEATL = DOMAIN[0].length;

function mod(number, divisor) {
  return ((number % divisor) + divisor) % divisor;
}

function getWord(digit, index) {
  return index === 0 ? DOMAIN[1][digit] : DOMAIN[0][mod(REPEATL - index, REPEATL)][digit];
}
function getInt(word, index) {
  return index === 0 ? DOMAIN[1].indexOf(word) : DOMAIN[0][mod(REPEATL - index, REPEATL)].indexOf(word);
}

function reduceEmptyOnNegative(prev, item) {
  if (item < 0 || (Array.isArray(prev) && prev.length === 0)) {
    return [];
  }

  return [].concat(prev, item);
}

export function convertToDigits(nickname) {
  const words = nickname.split('-');
  // Reversing twice to "mapRight"
  const digits = words.reverse().map(getInt).reverse().reduce(reduceEmptyOnNegative);

  return digits;
}

export function convertToNickname(digits) {
  // Reversing twice for processing without lazy generators
  const nickName = digits.reverse().map(getWord).reverse().join('-');

  return nickName;
}
