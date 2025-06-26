function findStartEndIndexes(arr, target) {
	const result = [];
	const len = result.length;
	
	for (let num of arr) {
		if (num === target && len == 0) {
			result.push(arr.indexOf(num));
		} else if (num !== target && len != 0) {
			result.push(arr.indexOf(num));
			break;
		}
	}
	
	return result;
}

console.log(findStartEndIndexes([1, 2, 3, 3, 3, 4, 5], 3));
