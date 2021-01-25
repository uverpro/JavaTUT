// snippet 3
let friends = ["philip", "leon", "maja", "arnold"];

for (let i = 0; i < friends.length; i++) {
  for (let j = 0; j < friends.length; j++) {
    console.log(friends[i], friends[j]);
  }
};

// PREDITION:
/*
philip, philip
philip, leon
philip, maja
philip, arnold
leon, philip
leon, leon
etc, etc
*/
