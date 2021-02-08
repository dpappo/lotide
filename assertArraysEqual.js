const eqArrays = require("./eqArrays");

const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Arrays are === equal: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Arrays are not === equal: ${arrayOne} !== ${arrayTwo}`);
  }
};

module.exports = assertArraysEqual;
