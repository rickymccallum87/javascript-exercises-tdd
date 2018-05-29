var palindromes = function(str) {
	// Ignore case
	str = str.toLowerCase();

	// Ignore non-alpha
	let arr = str.split('');
	let alpha = /^[a-z]+$/;
	for (let i = 0; i < arr.length; i++) {

		// Remove punctuation
		if (!arr[i].match(alpha)) {
			arr.splice(i, 1);
			i--;
		}

	}

	// Check for palindrome
	while (arr.length > 1) {
		if (arr.pop() !== arr.shift()) {
			return false;
		}
	}

	return true;
}

module.exports = palindromes
