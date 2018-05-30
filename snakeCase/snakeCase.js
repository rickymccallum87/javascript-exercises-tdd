var snakeCase = function(str) {
	
	// Detect WTF case
	const wtf = /^[a-z]+\.\.[a-z]+/i;
	if (str.match(wtf)) {
		return str.toLowerCase().split('..').join('_');
	}

	// Detect kebab case
	const kebab = /^[a-z]+-[a-z]+/i;
	if (str.match(kebab)) {
		return str.split('-').join('_');
	}

	// Detect camel case
	const camel = /^[a-z]+[A-Z][a-z]+/;
	if (str.match(camel)) {
		// Place an underscore before all capital letters
		return str.replace(/([A-Z])/, '_$1').toLowerCase();
	}

	// Spaced phrases remain
	// Replace spaces with underscores
	while (str.match(/\s/)) {
		str = str.replace(/\s/, '_');
	}
	// Remove punctuation
	while (str.match(/\W/)) {
		str = str.replace(/\W/, '');
	}
	return str.toLowerCase();

}

module.exports = snakeCase
