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

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
