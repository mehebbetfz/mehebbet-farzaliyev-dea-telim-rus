function summa1(arr) {
	return arr.reduce((total, num) => total + num);
}

console.log(summa1([1, 2, 3, 4, 5]));

function summa2(arr) {
	return eval(arr.join('+')); // Tehlukelidi
}

console.log(summa2([1, 2, 3, 4, 5]));


function summa3(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

console.log(summa3([1, 2, 3, 4, 5]));


function summa4(arr) {
	let total = 0;
	let i = 0;
	while (i < arr.length) {
		total += arr[i];
		i++;
	}
	return total;
}

console.log(summa4([1, 2, 3, 4, 5]));

function summa5(arr) {
	let total = 0;
	let i = 0;
	do {
		total += arr[i];
		i++;
	} while (i < arr.length);
	return total;
}

console.log(summa5([1, 2, 3, 4, 5]));

function summa6(arr) {
	let total = 0;
	for (const num of arr) {
		total += num;
	}
	return total;
}

console.log(summa6([1, 2, 3, 4, 5]));

