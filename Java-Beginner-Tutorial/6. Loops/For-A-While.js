// Converting FOR LOOPS into WHILE LOOPS and vice versa

// WHILE LOOPS
let i = 3;
while (i > 0 ) {
    console.log("I ran a lap!");
    i--;
};

let i = 0;
while (i < 3) {
    console.log("I ran a lap");
    i++;
};
// will print "I ran a lap!" 3x

// FOR LOOPS
for (let i = 3; i > 0; i--) {
    console.log("I ran a lap");
};

for (let i = 0; i < 3; i++) {
    console.log("I ran a lap");
};
// will print "I ran a lap!" 3x


// FOR total
let total = 0;
for (let i = 1; i < 5; i++) {
    total += i; // bc of this: 1, 3, 6, 10. Runs 4 times. (0 + 1), (1 + 2), (3 + 3), (6 + 4)
    console.log(total);
};
console.log("grand total: " + total)
// 1, 3, 6, 10 grand total; 10


// WHILE total
let i = 1;
let nutotal = 0;
while (i < 5) {
    nutotal += i; // bc of this: 1, 3, 6, 10. Runs 4 times. (0 + 1), (1 + 2), (3 + 3), (6 + 4)
    console.log(nutotal);
    i++
}
console.log("grand total: " + total)
// 1, 3, 6, 10 grand total; 10
