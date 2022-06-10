const takeUntil = function(array, callback) {
  const newArr = [];
  for (const element of array) {
    if (callback(element) === false) {
      newArr.push(element);
    } else {
      break;
    }
  }
  return newArr;
};

module.exports = takeUntil;