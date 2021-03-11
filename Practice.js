let lessThanTwo = function (num) {
    return num < 2;
};

let isPrime = function (number) {
    if (lessThanTwo(number)) {
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
    }
    return true;
};

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
