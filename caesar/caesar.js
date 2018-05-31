var caesar = function(str, shift) {
	// A: 65, Z: 90, a: 97, z: 122
	console.log('\n');
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		console.log(str.charCodeAt(i));
		newStr += String.fromCodePoint(str.charCodeAt(i) + shift);
	}
	
	console.log(str);
	return newStr;

	console.log('\n');
}

module.exports = caesar
