function summa(arr) {
	return arr.reduce((total, num) => total + num);
}

console.log(summa([1, 2, 3, 4, 5]));
