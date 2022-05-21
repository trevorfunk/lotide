const assertEqual = function(actual, expected) {
 if (actual !== expected) {
   console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
 } else {
   console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
 }
};

const head = (array) => {
 const head = array.shift();
 return head;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");