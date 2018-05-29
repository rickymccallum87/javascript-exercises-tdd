var palindromes = function(str) {
	// Ignore case
	str = str.toLowerCase();

	console.log(str);
	// Ignore non-alpha
	let arr = str.split('');
	for (let i = 0; i < arr.length; i++) {
		if (!arr[i].isAlpha) {
			arr.slice(i, 1);
		}
	}
	console.log(arr.join(''));

	// Check for palindrome
	while (arr.length > 1) {
		if (arr.pop() !== arr.shift()) {
			return false;
		}
	}

	return true;
}

module.exports = palindromes
