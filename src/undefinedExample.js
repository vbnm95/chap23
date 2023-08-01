let num;

console.log(typeof num);
console.log(typeof typeof num);
console.log(typeof num  == "undefined");

//num = 100;
num = typeof num != "undefined" ? num : 0;
console.log(num);

function xxx(a, b) {
	console.log(`a=${a}, b=${b}`);
	console.log(arguments)
}

function sum(...a) {
	let sum = 0;
	for(let i of a) {
		sum += i;
	}
		
	return sum;
}


xxx(3,4);
xxx();
xxx(10, 20, 30);

console.log(sum(1,2,3,4,5,6,7,8,9,10));
