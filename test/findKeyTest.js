const findKey = require('../findKey')
const { assert } = require('chai');

const planets = {
 "Blue Hill": { stars: 1 },
 "Akaleri":   { stars: 3 },
 "noma":      { stars: 2 },
 "elBulli":   { stars: 3 },
 "Ora":       { stars: 2 },
 "Akelarre":  { stars: 3 }
}

describe("#findKeyTest", () => {
 it("returns 'noma' for callback x => x.stars === 2", () => {
  assert.strictEqual(findKey(planets, x => x.stars === 2), 'noma')
 });
 it("returns undefined when callback does not match any value", () => {
  assert.strictEqual(findKey(planets, x => x.stars === 4), undefined)
 });
});