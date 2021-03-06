// Has Three Vowels (*)

/* Write a function hasThreeVowels that accepts a string as an argument.
The function should return a boolean
indicating whether or not the string contains at least three different vowels. */

let hasThreeVowels = function (str) {
    let vowels = "aeiouAEIOU"
    let vowelCounter = [];
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (vowels.includes(letter) && !(vowels.includes(letter))) {
            vowelCounter.push(letter); {
                if (vowelCounter.length > 2) {
                    return true;
                }
            }
        }
    }
    return false;
};

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
