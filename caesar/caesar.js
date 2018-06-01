var caesar = function(str, shift) {
	// A: 65, Z: 90, a: 97, z: 122
	let oldChar, oldCharCode;
	let newChar, newCharCode;
	let newStr = '';
	let punct = [' ', ',', '.', '!', '?']

	for (let i = 0; i < str.length; i++) {
		oldChar = str[i];
		oldCharCode = str.charCodeAt(i);

		// Ignore punctuation
		if (punct.includes(oldChar)) {
			newStr += oldChar;
		} else {

			// Wrap around alphabet
			newCharCode = str.charCodeAt(i) + shift;
			if (oldCharCode > 96 && newCharCode > 122) { // Lowercase
				newCharCode -= 26;
			} else if (oldCharCode < 91 && newCharCode > 90) { // Capitals
				newCharCode -= 26;
			}

			newChar = String.fromCodePoint(newCharCode);
			newStr += newChar;
		}
	}

	return newStr;
}

module.exports = caesar
