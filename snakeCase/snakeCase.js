var snakeCase = function(str) {
	console.log('\n');
	console.log(str);
	// Detect WTF case
	wtf = /^[a-z]+\.\.[a-z]/i
	if (str.match(wtf)) {
		console.log('wtf case');
	}
	
	// Detect kebab case
	
	// Detect camel case
	
	// Detect spaced phrases
	console.log('\n');
}

module.exports = snakeCase
