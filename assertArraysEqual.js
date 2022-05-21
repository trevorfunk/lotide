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
}


 assertArraysEqual([1, 2, 3], [1, 2, 3]) //true
 assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) //true
 assertArraysEqual([1, 2, 3], [1, 2, 3, 4]) //false
 assertArraysEqual([1, 2, 3], [3, 2, 1]) //false
 assertArraysEqual([1, 2, 3], [1, 2, "3"]) //false
