// Initials
// Write a function initials(name) that accepts a full name as an arg.
// The function should return the initials for that name.

initials = (name) => {
    let words = name.split(" ");
    let initials = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let initial = word[0];
        initials.push(initial.toUpperCase());
    }
    return initials.join('');
};

console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'
