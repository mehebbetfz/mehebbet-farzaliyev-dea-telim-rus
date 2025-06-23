function treeWithStars() {
		let tree = '';
		const height = 5;
		
		for (let i = 0; i < height; i++) {
				const spaces = ' '.repeat(height - i - 1);
				const stars = '*'.repeat(2 * i + 1);
				tree += spaces + stars + spaces + '\n';
		}
		
		return tree;
}

console.log(treeWithStars());
