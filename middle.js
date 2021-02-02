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

const middle = function(array) {
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

// middle([1, 2, 3]), [2];
// middle([1, 2, 3, 4, 5]);
// middle([1, 2, 3, 4]), [2, 3]; // => [2
// middle([1, 2, 3, 4, 5, 6]), [3, 4]; //
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
