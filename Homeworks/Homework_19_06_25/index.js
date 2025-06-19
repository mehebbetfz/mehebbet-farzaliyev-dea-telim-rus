// 1

// for (let i = 100; i <= 200; i++) {
// 	if (i % 2 !== 0) {
// 		console.log(i);
// 	}
// }

// 2

// let num = 12345;
// let sum = 0;
// while (num !== 0) {
// 	sum += num % 10;
// 	num = Math.floor(num / 10);
// }
// console.log(sum);

// 3

// let num = 758394;
// let minD = 9;
// while (num > 0) {
// 	let digit = num % 10;
// 	if (digit < minD) {
// 		minD = digit
// 	}
// 	num = Math.floor(num / 10);
// }
// console.log(minD);

// 4

// function isP(n) {
// 	if (n < 2) return false;
// 	for (let i = 2; i <= Math.sqrt(n); i++) {
// 		if (n % i === 0) return false;
// 	}
// 	return true;
// }

// 5

// for (let i = 500; i >= 300; i--) {
// 	if (isP(i)) {
// 		console.log(i);
// 	}
// }

// 6

// let array = [7, 2, 4, 9, 7, 1, 6];
// let count = 3;
//
// for (let i = 0; i < count; i++) {
// 	let last = array.pop();
// 	array.unshift(last);
// }
// console.log(array);
