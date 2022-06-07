const assertEqual = require('./assertEqual');

const head = (array) => {
 const head = array.shift();
 return head;
}

module.exports = head;