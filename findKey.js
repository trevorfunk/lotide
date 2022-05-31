const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (const key in object) {
   console.log(key);
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};





const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3);

const result3 = findKey({
  "Blue Hill": { stars: 1 },
}, x => x.stars === 2);

assertEqual(result1, "noma");
assertEqual(result2, "Akaleri");
assertEqual(result3, undefined);