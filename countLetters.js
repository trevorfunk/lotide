const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = (string) => {
  let letterCount = {};
  for (const letter of string) {
    if (letter !== ' ') {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};
const phrase = "lighthouse in the house";
const results = countLetters(phrase);

assertEqual(results['l'], 1);
assertEqual(results['i'], 2);
assertEqual(results['g'], 1);
assertEqual(results['h'], 4);
assertEqual(results['t'], 2);
assertEqual(results[' '], undefined);

