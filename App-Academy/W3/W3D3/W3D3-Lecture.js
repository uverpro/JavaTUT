// Immediately evoked function syntax

(function () {
    console.log('Run me');
})();

// Anonymous functions written above can only be ran once!
// Doesn't exist outside of this scope

let result = (function () {
    return "Party!";
})();

console.log(result);

// Evoking the return value of the function, not the function itself
