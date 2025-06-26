function findStartEndIndexes(arr, target) {
	const result = [];
	
	for (let num of arr) {
		if (num === target && result.length == 0) {
			result.push(arr.indexOf(num));
		} else if (num !== target && result.length != 0) {
			result.push(arr.indexOf(num));
			break;
		}
	}
	
	return result;
}

console.log(findStartEndIndexes([1, 2, 3, 3, 3, 4, 5], 3));
