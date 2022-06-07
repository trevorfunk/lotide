const middle = (array) => {
 let newArray = []
 if (array.length < 3) {
  return newArray;
 }
 if (array.length % 2 !== 0) {
  let middleNum = Math.floor(array.length / 2);
  newArray.push(array[middleNum]);
 }
 if (array.length % 2 === 0) {
  let middleNum = Math.floor((array.length / 2) - 1);
  let middleNum2 = Math.floor(array.length / 2);
  newArray.push(array[middleNum], array[middleNum2]);
 }
 return newArray;
};

module.exports = middle;