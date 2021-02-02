const eqArrays = function(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Arrays are === equal: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Arrays are not === equal: ${arrayOne} !== ${arrayTwo}`);
  }
};

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]] = [...results[sentence[i]], i];
    }
  }
  return results;
};

// letterPositions("hello");

assertArraysEqual(letterPositions("hello")["h"], [0]);
assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("hello")["o"], [4]);