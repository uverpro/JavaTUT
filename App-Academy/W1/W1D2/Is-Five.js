// Define a function isFive that will return true if a number is equal to 5 and false if it is not.

function isFive (num) {
    if (num === 5) {
    return true
    } // else { //   // we don't have to wrap this in an `else` because if the above code did *not*
                    // run then the number can't be 5 so we can just return false!
        return false
    //}
};

console.log(isFive(5)); // => true
console.log(isFive(13)); // => false
