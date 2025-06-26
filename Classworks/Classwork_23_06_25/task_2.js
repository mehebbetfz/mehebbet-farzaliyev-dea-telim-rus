function treeWithStars() {
		let tree = '';
		const height = 5;
		const width = 8;
		
		for (let i = 0; i < height; i++) {
				const spaces = ' '.repeat(width - i - 1);
				const stars = '*'.repeat(2 * i + 1);
				tree += spaces + stars + spaces + '\n';
		}
		
		return tree;
}

console.log(treeWithStars());


function sumOfPositiveNegative(arr) {
	return arr.flat().filter((num) => num < 0).reduce((total, num) => total + num, 0);
}

console.log(sumOfPositiveNegative([[1, 2, -3, -4, 5], [3, 4, 5, 6, -7], [5, 6, 7, 8, -9]]));
