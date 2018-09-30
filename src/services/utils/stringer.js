const initials = phrase => phrase.split(' ').reduce((initials, word) => initials + word.charAt(0), '');

const contains = (phrase, substring) => phrase.toLowerCase().includes(substring.toLowerCase());

const indexOf = (phrase, substring) => phrase.toLowerCase().indexOf(substring.toLowerCase());

export {
  initials,
  contains,
  indexOf,
};