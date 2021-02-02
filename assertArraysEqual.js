

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


(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // => true
(assertArraysEqual([1, 2, 3], [3, 2, 1]), false); // => false

(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true); // => true
(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false); // => false