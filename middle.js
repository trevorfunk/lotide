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
}

const middle = (array) => {
 let newArray = []
 let num = 0;
  if (array.length <= 2) {
   return newArray;
  }
  console.log(array.length)
  for (i = 0; i < array.length; i++) {
   num += i;
  }
 



// middle([1]) // => []
// middle([1, 2]) // => []
//middle([1, 2, 3]) // => [2]
//middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]