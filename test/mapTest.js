const assert = require('chai').assert;
const map = require('../map');

const fruits = ["mango", "apple", "pear", "jackfruit", "strawbery"];
const numbers = [1, 2, 3, 4, 5];

describe("#map", () => {
 it("returns [ 'm', 'a', 'p', 'j', 's'] when asked for first letter of each word from ['mango', 'apple', 'pear', 'jackfruit', 'strawbery']", () => {
  assert.deepEqual(map(fruits, fruit => fruit[0]), [ 'm', 'a', 'p', 'j', 's']);
});
it("returns [10, 20, 30, 40, 50] when asked to * every number of array by 10", () => {
 assert.deepEqual(map(numbers, number => number * 10 ), [10, 20, 30, 40, 50]);
}); 
})