const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
 it("returns true for comparing { a: '1', b: '2' } and { b: '2', a: '1' }", () =>{
  const ab = { a: '1', b: '2' };
  const ba = { b: '2', a: '1' };
  assert.isTrue(eqObjects(ab, ba))
 });
 it("returns true for comparing { c: '1', d: ['2', 3] } and { d: ['2', 3], c: '1' }", () => {
  const cd = { c: '1', d: ['2', 3] };
  const dc = { d: ['2', 3], c: '1' };
  assert.isTrue(eqObjects(cd, dc));
 });
 it("returns false for comparing { c: '1', d: ['2', 3, 4] } and { c: '1', d: ['2', 3] }", () => {
  const cd2 = { c: '1', d: ['2', 3, 4] };
  const cd = { c: '1', d: ['2', 3] };
  assert.isFalse(eqObjects(cd2, cd));
 });
 it("returns false when an object is empty", () => {
  const abc = { a: '1', b: '2', c:'3' };
  const empty = {};
  assert.isFalse(eqObjects(abc, empty));
 });
});