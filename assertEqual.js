const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }
};

assertEqual("Lighthouse", "Lighthouse");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
