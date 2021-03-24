(function () {
    console.log('Run me');
})();

// Anonymous functions written above can only be ran once!

let result = (function () {
    return "Party!";
})();

console.log(result);

// Evoking the return value of the function, not the function itself
