function fibonachi(n) {
	let a = 0;
	let b = 1;
	let result = [];
	
	for (let i = 0; i < n; i++) {
		result.push(a);
		let temp = a;
		a = b;
		b = temp + b;
	}
	
	return result;
}

console.log(fibonachi(20));


function fibonachiWithoutLoop(n) {

}
