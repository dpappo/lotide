//assertEqual
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (Array.isArray(arrayOne[i])) {
      return eqArrays(arrayOne[i], arrayTwo[i]);
    } else if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

// assertEqual(eqArrays([1, 2, 3, [4]], [1, 2, 3, [4]]), true); // => true
// assertEqual(eqArrays([1, 2, 3, [4]], [3, 2, 1], [4]), false); // => false

// assertEqual(eqArrays(["1", "2", "3", ["4"]], ["1", "2", "3", ["4"]]), true); // => true
// assertEqual(eqArrays(["1", "2", "3", ["4"]], ["1", "2", 3, ["4"]]), false); // => false
