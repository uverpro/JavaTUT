function stringChanger(word, operation) {
    let nuWord = "";
    if (operation === "capitalize")
        nuWord += word.toUpperCase();
    if (operation === "uppercase")
        nuWord += word.toUpperCase();
    return nuWord;
}

console.log(stringChanger("foo", "capitalize")); // Foo
console.log(stringChanger("foo", "uppercase")); // FOO
// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;

if (stringChanger("foo", "unknown") === "foo") score++;

console.log("You have scored " + score + "/5 points.");
