//assertEqual
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//eqArrays
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //check if same length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  //compares array items in object
  for (let item in object1) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      return eqArrays(object1[item], object2[item]);
    }
  }

  //now lets look at objects
  for (let item in object1) {
    if (
      typeof object1[item] === "object" &&
      typeof object2[item] === "object" &&
      !Array.isArray(object1[item]) &&
      !Array.isArray(object2[item])
    ) {
      console.log("comparing: ", object1[item], object2[item]);
      return eqObjects(object1[item], object2[item]);
      //but what if they're not both the same kind of data type?
    } else if (typeof object1[item] !== typeof object2[item]) {
      return false;
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

module.exports = eqObjects;

// //tests
// const ab = { a: "1", b: "2", c: {a: "1", b: "2"}};
// const ba = { b: "2", a: "1", c: {b: "2", a: "1", c: "2"}};
// assertEqual(eqObjects(ab, ba), false); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
