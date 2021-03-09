let smallestValue = function (array) {
    if (array.length === 0) {
        return null;
    }
    let smallestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        let num = array[i];
        if (num < smallestNumber) {
            smallestNumber = num;
        }
    }
    return smallestNumber;
};

console.log(smallestValue([20, 100, 8, 5000, 316]));
console.log(smallestValue([]));
