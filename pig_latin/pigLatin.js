function translate(str) {
	if (str[0].match(/[aeiou]/)) { // first letter is a vowel
		return str.concat('ay');
	} else {
		startSound = str.match(/[^aeiou]+/);
		console.log(startSound, startSound.length);
		return str.slice(startSound[0].length).concat(startSound[0] + 'ay');
	}
}


module.exports = {
	translate
}

