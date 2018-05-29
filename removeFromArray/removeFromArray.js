let removeFromArray = function(arr) {
  // position of element to remove
  let pos;
  // remove each argument from array, if found
  for (let i = 1; i < arguments.length; i++) {
    // store position of element
    pos = arr.indexOf(arguments[i]);
    // if no element match, do not attempt to remove
    if (pos == -1) continue;
    // remove element from array
    arr.splice(pos, 1);
  }
  return arr;
};

module.exports = removeFromArray
