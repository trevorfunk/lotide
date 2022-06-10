const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

const bestShowByGenre = {
 sci_fi: "The Expanse",
 comedy: "Brooklyn Nine-Nine",
 drama: "The Wire"
};

describe("#finKeyByValue", () => {
 it("returns 'sci-fi' for 'The Expanse'", () => {
  assert.strictEqual(findKeyByValue(bestShowByGenre, "The Expanse"), "sci_fi");
 });
 it("returns undefined for empty value", () => {
  assert.strictEqual(findKeyByValue(bestShowByGenre, ""), undefined);
 });
});