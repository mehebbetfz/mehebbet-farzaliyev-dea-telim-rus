function summa1(arr) {
	return arr.reduce((total, num) => total + num);
}

console.log(summa1([1, 2, 3, 4, 5]));


function summa2(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

console.log(summa2([1, 2, 3, 4, 5]));
