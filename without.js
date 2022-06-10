const without = (array, itemsRemoved) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== itemsRemoved[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = without;