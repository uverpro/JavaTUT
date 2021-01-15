function stringChanger(word, operation) {
    let nuWord = "";
    if (operation === "capitalize")
        nuWord += word[0].toUpperCase() + word.slice(1);
    if (operation === "uppercase")
        nuWord += word.toUpperCase();
    if (operation === "reverse")
        nuWord += word.split("").reverse().join("")
    return nuWord;
}

console.log(stringChanger("foo", "capitalize")); // Foo
console.log(stringChanger("foo", "uppercase")); // FOO
console.log(stringChanger("foo", "double")); // foofoo
console.log(stringChanger("foo", "reverse")); // oof
// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;

if (stringChanger("foo", "unknown") === "foo") score++;

console.log("You have scored " + score + "/5 points.");
