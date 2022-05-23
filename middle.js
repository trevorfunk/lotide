const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (array1, array2) => {
  if (!eqArrays(array1, array2)) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
  console.log(`🟢🟢🟢 Assertion Passed: ${array1} === ${array2}`);
};

const middle = (array) => {
  let newArray = [];
  if (array.length < 3) {
    return newArray;
  }
  if (array.length % 2 !== 0) {
    let middleNum = Math.floor(array.length / 2);
    newArray.push(array[middleNum]);
  }
  if (array.length % 2 === 0) {
    let middleNum = Math.floor((array.length / 2) - 1);
    let middleNum2 = Math.floor(array.length / 2);
    newArray.push(array[middleNum], array[middleNum2]);
  }
  return newArray;
};

console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
console.log(assertArraysEqual(middle([2, 9, 5, 5]), [9, 5]));