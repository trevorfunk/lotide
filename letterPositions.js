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


const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
  }
  return results;
};


const phrase = "lighthouse in the house";
const phraseResult = letterPositions(phrase);

assertArraysEqual(phraseResult['l'], [0]);
assertArraysEqual(phraseResult['i'], [1, 11]);
assertArraysEqual(phraseResult['g'], [2]);
assertArraysEqual(phraseResult['h'], [3, 5, 15, 18]);
assertArraysEqual(phraseResult['t'], [4, 14]);