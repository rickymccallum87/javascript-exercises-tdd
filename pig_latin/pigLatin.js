function translate(str) {
  arr = str.split(' ');

	// Deal with one word at a time
	for (let i = 0; i < arr.length; i++) {

		// Translate each word
		if (arr[i][0].match(/[aeiou]/)) {

			// Vowel sound
			arr[i] = arr[i].concat('ay');
		} else {

			// Consonant sound
			startSound = arr[i].match(/qu|[^aeiou]+qu|[^aeiou]+/);
			arr[i] = arr[i].slice(startSound[0].length).concat(startSound[0] + 'ay');
		}
	}

	return arr.join(' ');
}


module.exports = {
	translate
}

