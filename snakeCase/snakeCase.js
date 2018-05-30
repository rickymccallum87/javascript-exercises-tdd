var snakeCase = function(str) {
	console.log('\n');
	console.log(str);
	// Detect WTF case
	const wtf = /^[a-z]+\.\.[a-z]+/i;
	if (str.match(wtf)) {
		console.log('wtf case');
		return;
	}
	
	// Detect kebab case
	const kebab = /^[a-z]+-[a-z]+/i;
	if (str.match(kebab)) {
		console.log('kebab case');
		return;
	}
	
	// Detect camel case
	const camel = /^[a-z]+[A-Z][a-z]+/;
	if (str.match(camel)) {
		console.log('camel case');
		return;
	}
	
	// Detect spaced phrases
	let arr = str.split(' ');
	console.log(arr);

	console.log('\n');
}

module.exports = snakeCase
