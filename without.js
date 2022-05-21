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

const assertArraysEqual = (arr1, arr2) => {
  if (!eqArrays(arr1, arr2)) {
    return console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
  console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`);
};



const without = (array, itemsRemoved) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== itemsRemoved[i]) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  console.log(array);
};


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without([1, 2, 3], [2, 1, 3]); // => [3]