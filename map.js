//assertArraysEqual
const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Arrays are === equal: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Arrays are not === equal: ${arrayOne} !== ${arrayTwo}`);
  }
};

//map
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//test cases

// const words = ["ground", "control", "to", "major", "tom"];
// assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);

// const numbers = [412, 53, 123, 63];
// assertArraysEqual(map(numbers, number => number * 3), [ 1236, 159, 369, 189 ]);

// const parse = ["1two", "3four", "5six"];
// assertArraysEqual(map(parse, item => parseInt(item)), [ 1, 3, 5 ]);
