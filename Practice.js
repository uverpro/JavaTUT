let nonsense = "blog trust fund tattooed williamsburg poke roof party";
let hasOk = nonsense.indexOf("ok") > -1; // true

if (hasOk) {
  console.log("yeet"); // yeet
} else if (nonsense.length > 10) {
  console.log("yo");
} else {
  console.log("no");
}

let hasZoo = nonsense.indexOf("zoo") > -1; // false
let hasFun = nonsense.indexOf("fun") > -1; // true

if (hasZoo && hasOk) {
  console.log("cool");
} else if (hasOk) {
  console.log("rad"); // rad
} else if (hasFun) {
  console.log("dope");
} else {
  console.log("nope");
}
