function add (op1, op2) {
	return op1 + op2;
}

function subtract (op1, op2) {
	return op1 - op2;
}

function sum (arr) {
	let sum = 0;
	arr.forEach(item => {
		sum += item;
	});
	return sum;
}

function multiply (arr) {
	let product = 1;
	arr.forEach(item => {
		product *= item;
	});
	return product;
}

function power(op1, op2) {
	return op1 ** op2;
}

function factorial(op) {
	let f = 1;
	for (let i = 2; i <= op; i++) {
		f *= i;
	}
	return f;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
