/***********************************************************************
Write a function named `filterUserProfiles` that accepts an array of
objects that represent user profiles and a callback function. You
can expect the callback function to take in an object and return
true or false.

`filterUserProfiles` should use the callback function to return an
array of names from the user profiles that, when passed into the
callback function, return true. You can expect all user profiles to
be passed in with a key of "name".

const facebookUsers = [
  { name: "John", age: "21", state: "Florida" },
  { name: "Mary", age: "57", state: "California" },
  { name: "Judy", age: "47", state: "Texas" },
  { name: "Mike", age: "32", state: "New York" }
];

filterUserProfiles(facebookUsers, (user) => user.age > 30); // ["Mary", "Judy", "Mike"]
filterUserProfiles(facebookUsers, (user) => user.state === "New York"); // ["Mike"]
***********************************************************************/
// Input: 1 array of objects. 1 callback function
// output 1 array of string(names) from user profile
// STRATEGY:
// Result array
// iterate over array of objects
// for each object
// pass an object to callback function
// if callback function returns true
// store the name in the result array
// at the end looking at them all
// return result array

const filterUserProfiles = (profiles, callback) => {
    let result = [];
    for (let i = 0; i < profiles.length; i++) {
      let prof = profiles[i]; // each profile
      if (callback(prof)) {
        result.push(prof["name"]) // add name to result array
      }
    }
    return result
  };

  const facebookUsers = [
    { name: "John", age: "21", state: "Florida" },
    { name: "Mary", age: "57", state: "California" },
    { name: "Judy", age: "47", state: "Texas" },
    { name: "Mike", age: "32", state: "New York" }
  ];

  console.log(filterUserProfiles(facebookUsers, (user) => user.age > 30)); // ["Mary", "Judy", "Mike"]
  console.log(filterUserProfiles(facebookUsers, (user) => user.state === "New York")); // ["Mike"]
