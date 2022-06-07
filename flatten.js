const flatten = (array) => {
  newArr = [];
  for (const element of array) {
    if (!Array.isArray(element)) {
      newArr.push(element);
    }
    if (Array.isArray(element)) {
      for (const nestedElement of element) {
        newArr.push(nestedElement);
      }
    }
  }
  return newArr;
};

// console.log(flatten([[1], 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// flatten([[1], 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
// flatten([[1], 2, [3, 5], 5, 6, [11, 12]]); // => [1, 2, 3, 4, 5, 6]

console.log(flatten([['🦖'], ['🦕', '🐢'], ['🦬'], '🦤', '🦏', '🦣'])) 
