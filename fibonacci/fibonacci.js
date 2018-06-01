var fibonacci = function(num) {
	// Do not accept negatives
	if (num < 0) {
		return 'OOPS';
	}

	// Accept strings
	num = +num;

	let fib = [1,1]
	for (let i = 2; i < num; i++) {
		fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
	}
	return fib.pop();
}

module.exports = fibonacci
