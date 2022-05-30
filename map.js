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


const words = ["ground", "control", "to", "major", "tom"];
const fruits = ["mango", "apple", "pear", "jackfruit", "strawbery"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(fruits, fruit => fruit[0]);
console.log(results2);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'm', 'a', 'p', 'j', 's']);

