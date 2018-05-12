var repeatString = function(str, num) {
	if (num < 0) return 'ERROR';

	let repeat = '';
	for (let i = 1; i <= num; i++) {
		repeat += str;
	}
	return repeat;
}

module.exports = repeatString
