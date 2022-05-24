const assertEqual = function (actual, expected) {
 if (actual !== expected) {
  console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
 } else {
  console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
 }
};


const findKeyByValue = (object, keyValue) => {
 let genre = '';
 for (const value in object) {
  if (object[value] === keyValue) {
   return genre = value;
  }
 }
}










const bestTVShowsByGenre = {
 sci_fi: "The Expanse",
 comedy: "Brooklyn Nine-Nine",
 drama: "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);