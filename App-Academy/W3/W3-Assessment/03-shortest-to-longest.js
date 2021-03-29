/***********************************************************************
Write a recursive function called `shortestToLongest` which takes
an array of lowercase strings and returns them sorted from shortest
to longest.

Strings of equal length should be sorted alphabetically.

(Hint: str1 < str2 will return true if str1 comes before str2
alphabetically)

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the shortest string in the `strings` array to the end of `sorted`.
***********************************************************************/

    function shortestToLongest(strings, sorted = []) {
        if (!strings.length) {
        return sorted;
        }

        let smallestString = strings[0];
        let pos;

        for (let i = 0; i < strings.length; i++) {
        let currentString = strings[i];
        if (
        currentString.length < smallestString.length ||
        (currentString.length === smallestString.length &&
        currentString < smallestString)
        ) {
        pos = i;
        smallestString = currentString;
        }
        }

        sorted.push(smallestString);
        strings.splice(pos, 1);

        return shortestToLongest(strings, sorted);
        }

        // Sorts strings from shortest to longest
        let strings1 = ["abc", "de", "", "f", "ghijk", "lmno"];
        console.log(shortestToLongest(strings1));
        // ['', 'f', 'de', 'abc', 'lmno', 'ghijk']

        // Accepts a pre-sorted default parameter
        let strings2 = ["pomegranate", "persimmon", "peach"];
        let sorted = ["pea", "pear"];
        console.log(shortestToLongest(strings2, sorted));
        // ['pea', 'pear', 'peach', 'persimmon', 'pomegranate']

        // Sorts strings of the same length alphabetically
let strings3 = shortestToLongest(["dog", "cat", "elephant", "ant", "pig", "emu"]);
shortestToLongest(strings3);
// ['ant', 'cat', 'dog', 'emu', 'pig', 'elephant']

// Sorts strings from shortest to longest
let strings1 = ["abc", "de", "", "f", "ghijk", "lmno"]
shortestToLongest(strings1);
// ['', 'f', 'de', 'abc', 'lmno', 'ghijk']


// Accepts a pre-sorted default parameter
let strings2 = ["pomegranate", "persimmon", "peach"];
let sorted = ["pea", "pear"];
shortestToLongest(strings2, sorted);
// ['pea', 'pear', 'peach', 'persimmon', 'pomegranate']


// Sorts strings of the same length alphabetically
let strings3 = shortestToLongest(["dog", "cat", "elephant", "ant", "pig", "emu"]);
shortestToLongest(strings3);
// ['ant', 'cat', 'dog', 'emu', 'pig', 'elephant']
