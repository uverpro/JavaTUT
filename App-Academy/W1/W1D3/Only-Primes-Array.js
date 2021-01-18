// Define a function that takes in an array of numbers
// and returns a new array containing only the primes

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

function onlyPrimes(arr) {
	let primes = [];
	for(let i = 0; i < arr.length; i++) {
		if (isPrime(arr[i])) {
			primes.push(arr[i]);
		}
	}
	return primes;
}


console.log(onlyPrimes([1, 2, 4, 10, 13, 19, 23]))
