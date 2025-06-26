function findStartEndIndexes1(arr, target) {
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

console.log(findStartEndIndexes1([1, 2, 3, 3, 3, 4, 5], 3));


function findStartEndIndexes2(arr, target) {
	const start = arr.indexOf(target);
	if (start === -1) return [];
	
	let end = start;
	while (end + 1 < arr.length && arr[end + 1] === target) {
		end++;
	}
	
	return [start, end + 1];
}

console.log(findStartEndIndexes2([1, 2, 3, 3, 3, 4, 5], 3))
