let isPrime = function (num) {
    if (num < 2) {
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
    }
    return true;
};
