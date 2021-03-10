// 8. Define a function that takes in an array of elements
// and returns a 2d array where the subarrays represent unique pairs of elements

let uniquePairs = function (array) {
    let finalArray = [];
    let subArray = [];
    for (let i = 0; i < array.length; i++)
        for (let j = i + 1; array.length; j++) {
            let el1 = array[i];
            let el2 = array[j];
            if (el1 === el2) {
                subArray.push(el2)
            }
            return subArray;
        }
};

// console.log(uniquePairs(["blue", "velvet", "eraserhead", "blue", "mulholland", "eraserhead"]));
console.log(uniquePairs([1, 2, 3, 10, 1, 2, 10, 15, 20, 20]));
