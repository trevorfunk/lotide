const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
 it("returns [0] for l in 'lighthouse' ", () => {
  assert.deepEqual(letterPositions("lighthouse").l, [0])
 });
 it("returns undefined for letter not in 'lighthouse'", () => {
  assert.deepEqual(letterPositions("lighthouse").a, undefined)
 });
});
