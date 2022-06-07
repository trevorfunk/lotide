const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
 it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
  assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs']), 'Labs')
 });
 it("returns 3 for [1, 2, 3]", () => {
  assert.strictEqual(tail([1, 2, 3]), 3);
 })
});
