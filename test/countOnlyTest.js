const countOnly = require('../countOnly')
const { assert } = require('chai');

const firstNames = [
 "Karl",
 "Salima",
 "Agouhanna",
 "Fang",
 "Kavith",
 "Jason",
 "Salima",
 "Fang",
 "joe"
];

describe("#countOnly", () => {
 it("returns 1 for 'Jason' when 'Jason' is true", () => {
  assert.strictEqual(countOnly(firstNames, {"Jason": true}).Jason, 1)
 });
 it("returns undefined for 'Karima' when 'Karima' is true but is not in object", () => {
  assert.strictEqual(countOnly(firstNames, {"Karima": true}).Karima, undefined)
 });
 it("returns undefined for Agouhanna when it is empty", () => {
  assert.strictEqual(countOnly(firstNames, {}).Agouhanna, undefined)
 })
})