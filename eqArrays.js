const assertEqual = function(actual, expected) {
 if (actual !== expected) {
   console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
 } else {
   console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
 }
};


/*
-take in two arrays as arguments
-compare the two arrays
 -loop through each element of each array
-return true if arrays are equal, false if not

-check if array elements are same type
*/

const eqArrays = (array1, array2) => {
if (array1.length !== array2.length) {
 return false;
}
for (i = 0; i < array1.length; i++) {
 if (array1[i] !== array2[i]) {
  return false;
 }
}
return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false