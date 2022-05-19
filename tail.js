const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = (array) => {
  const tail = array.slice(1);
  console.log(array);
  return tail;


};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");