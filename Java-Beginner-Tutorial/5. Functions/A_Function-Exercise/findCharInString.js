// Write a function that finds the first instance of a character in a string
// and returns null if it doesn't exist.

function findCharacterInString(str, chr) {
    const characterIndex = str.indexOf(chr);
    if (characterIndex === -1) {
        return null;
    }
    return characterIndex;
};

console.log(findCharacterInString("happy", "z"));
