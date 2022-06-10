const countLetters = require('../countLetters')
const { assert } = require('chai');

describe("#countLetters", () => {
 it("returns 2 for 'h' of 'lighthouse'", () => {
  assert.strictEqual(countLetters("lighthouse").h, 2)
 });
 it("returns undefined for 'a' of 'lighthouse'", () => {
  assert.strictEqual(countLetters("lighthouse").a, undefined)
 });
});
