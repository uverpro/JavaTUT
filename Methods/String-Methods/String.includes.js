// String.prototype.includes()
// The includes() method determines whether one string may be found within another string,
//  returning true or false as appropriate.

const str = "1, 2, 3";

console.log(str.includes(2));
// expected output: true

const pets = "cat, dog, bat";

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('false'));
// expected output: false



const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"



// .includes() vs .indexOf():
// includes() ONLY returns a Boolean
// .indexOf() returns a number. (Which can be used as a Boolean)
