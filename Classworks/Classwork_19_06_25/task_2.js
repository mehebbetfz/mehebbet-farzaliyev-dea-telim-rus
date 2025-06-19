function isPalindrome(num) {
		return `${num}` === `${num}`.split('').reverse().join('');
}

console.log(isPalindrome(121));
