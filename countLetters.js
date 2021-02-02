// assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let countObject = {};
  for (let letter of sentence) {
    if (countObject[letter] === undefined) {
      countObject[letter] = 1;
    } else {
      countObject[letter] += 1;
    }
  }
  return countObject;
};

assertEqual(countLetters("Apple")["p"], 2);