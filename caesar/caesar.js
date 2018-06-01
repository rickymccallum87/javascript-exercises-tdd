var caesar = function(str, shift) {
	// Account for large shift factors
	while (shift > 26) {
		shift -= 26;
	}

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
			newCharCode = wrapCheck(oldCharCode, newCharCode);

			newChar = String.fromCodePoint(newCharCode);
			newStr += newChar;
		}
	}

	return newStr;
}

function wrapCheck(oldCharCode, newCharCode) {
	if (oldCharCode >= 97 && newCharCode > 122) { // Lowercase past z
		newCharCode -= 26;
	} else if (oldCharCode >= 97 && newCharCode < 97) { // Lowercase past a
		newCharCode += 26;
	} else if (oldCharCode <= 90 && newCharCode > 90) { // Capitals past Z
		newCharCode -= 26;
	} else if (oldCharCode <= 90 && newCharCode < 65) { // Capitals past A
		newCharCode += 26;
	}

	return newCharCode;

}
module.exports = caesar
