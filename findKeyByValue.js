const findKeyByValue = (object, keyValue) => {
  let genre = '';
  for (const value in object) {
    if (object[value] === keyValue) {
      return genre = value;
    }
  }
};

module.exports = findKeyByValue;