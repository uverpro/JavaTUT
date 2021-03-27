/***********************************************************************
Write a function named `dynamicRotate(num)`. When invoked the
`dynamicRotate` function will accept a number to be used as the
rotation amount and return a function. Positive numbers rotate
the array to the right and negative numbers rotate to the left.

The function returned by `dynamicRotate` will accept an array to
be rotated by the amount provided when the `dynamicRotate` was
first invoked. It will return the original array mutated by
the given rotation.
***********************************************************************/

function dynamicRotate(num) {
    return (arr) => {
        if (!num) return arr;
        for (let i = 0; i < Math.abs(num); i++) {
        num > 0 ? arr.unshift(arr.pop()) : arr.push(arr.shift());
        }
    }
};

let arr = ['a', 'b', 'c', 'd', 'e'];
rotateRightTwo = dynamicRotate(2);
rotateRightTwo(arr);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotateLeftOne = dynamicRotate(-1);
rotateLeftOne(animals)
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
