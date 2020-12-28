// Write a function that accepts an array of number as an argument and
// reuturns the smaller number in the array
// If the array is empty it will return null

function smallestNum (arraynums) {
    let smallest = arraynums[0]; // Create a new variable. The default value is the first index in the array.
    for (let i = 0; i < arraynums.length; i++) { // change i to default value of "1" so as to not compare index 0 (5) against itself.
        // console.log(arraynums[i]); // 5, 6, 4, 3, 7 // console.log(i); (0, 1, 3, 4,)
        let num = arraynums[i];
        if (num < smallest) { // If the next iteration of arraynums[i] (num) is smaller than arraynums[0] (smallest) "5"
            smallest = num; // Then replace the arraynums[] (smallest)
        }
    }
    return smallest;
};

console.log(smallestNum([5, 6, 4, 3, 7]); // 3
console.log(smallestNum([5, 6, 4, 3, 7])); // 3
console.log(smallestNum([17, 20]));
console.log(smallestNum([])); // null
// null is a special value in JS used to represent emptiness/nothingness
// null is distinct from undefined because it is deliberate nothingness
