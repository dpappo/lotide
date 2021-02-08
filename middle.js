const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function (array) {
  // some empty variables with the right data types
  let middleNumber = 0;
  let newArray = [];
  const arrayLength = array.length;

  // catch edge case for arrays that be too short
  if (arrayLength <= 2) {
    return [];
  }

  // if array is even in length;
  if (arrayLength % 2 === 0) {
    middleNumber = arrayLength / 2;
    newArray.push(array[middleNumber - 1], array[middleNumber]);
  } else {
    // odd length array;
    middleNumber = Math.floor(arrayLength / 2);
    newArray.push(array[middleNumber]);
  }

  return newArray;
};

module.exports = middle;
