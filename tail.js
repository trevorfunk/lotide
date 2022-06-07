const tail = (array) => {
  const tail = array.pop();
  return tail;
};

console.log(tail(["Hello", "Lighthouse", "Labs"]));

module.exports = tail;