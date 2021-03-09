function isPrime (number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0)
        return false;
    }
    return true;
};

// console.log(isPrime(11));

let onlyPrimes = function (array) {
	let primes = [];
	for(let i = 0; i < array.length; i++) {
		let num = array[i];
        if (isPrime(num)) {
			primes.push(num);
		}
	}
	return primes;
};

console.log(onlyPrimes([1, 4, 5, 10, 11, 21, 23, 31]));
