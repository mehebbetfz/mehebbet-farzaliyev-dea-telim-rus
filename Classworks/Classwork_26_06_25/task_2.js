function fizzBuzz(n) {
	let result = ''
	
	for (let i = 0; i < n; i++) {
		if (i % 3 === 0 && n % 5 === 0) {
			result = 'FizzBuzz'
		} else if (i % 3 === 0) {
			result = 'Fizz'
		} else if (n % 5 === 0) {
			result = 'Buzz'
		}
	}
	
	return result
}

console.log(fizzBuzz(56))

