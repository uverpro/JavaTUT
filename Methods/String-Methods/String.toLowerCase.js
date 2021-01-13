// String.prototypse.toLowerCase()
// The toLowerCase() method returns the calling string value converted to lower case.


const sentence = 'THE GIANT WALKED OVER THE HILL HOORAY';

console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."



function whisper (str) {
    return "..." + str.toLowerCase() + "...";
};

console.log(whisper("Hey Buddy")); // => "...hey buddy..."
console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."
