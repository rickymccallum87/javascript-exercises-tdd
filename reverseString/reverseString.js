var reverseString = function(str) {
  reversed = '';
  // append each final character to reversed, then remove it
  while (str) {
    lastChar = str.length - 1;
    reversed += str.charAt(lastChar)
    str = str.substr(0,lastChar)
  }
  return reversed;
}

module.exports = reverseString
