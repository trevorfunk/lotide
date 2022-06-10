const flatten = (array) => {
 const newArr = [];
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

module.exports = flatten;