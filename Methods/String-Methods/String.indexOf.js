// The indexOf() method returns the index within the calling String object of the first occurrence
// of the specified value, starting the search at fromIndex.
// Returns -1 if the value is not found. (<= Can be used as a Boolean)

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log("The index of the first " + searchTerm + " from the beginning is " + indexOfFirst);
// => "The index of the first "dog" from the beginning is 40"

console.log("The index of the 2nd " + searchTerm + " is " + paragraph.indexOf(searchTerm, (indexOfFirst + 1)));
// => "The index of the 2nd "dog" is 52"
