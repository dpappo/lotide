//eqArrays
//eqArrays
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    // console.log("arrays are different length");
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  } return true;
};


//eq objects
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let item in object1) {
    // console.log(Array.isArray(object1[item]));
    // console.log(Array.isArray(object2[item]));

    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      return eqArrays(object1[item], object2[item]);
    }
  }

  for (let item in object1) {
    if (object1[item] !== object2[item]) {
      return false;
    } else {
      return true;
    }
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Objects are === equal: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Objects are not === equal: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


//tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
(assertObjectsEqual(ab, ba)); // => pass

const abc = { a: "1", b: "2", c: "3" };
(assertObjectsEqual(ab, abc)); // => fail

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
(assertObjectsEqual(cd, dc)); // => pass

const cd2 = { c: "1", d: ["2", 3, 4] };
(assertObjectsEqual(cd, cd2)); // => fail