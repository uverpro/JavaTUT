/***********************************************************************
Welcome to The Article Company! At AC, you have been tasked with a
very important job! Your boss says we need more articles about Spiderman!
But, uh-oh! Some of the writers did not write articles about Spiderman.
You have been given a long string that contains a list of every writer,
and a value that shows if they have written an article about Spiderman.
You must write a function, 'spiderManWriters(string)' and convert its contents
to an object that "ONLY" contains key value pairings of writers who did "NOT"
write about Spiderman.

Assumptions:
You may assume that the order of the key value pairs in the object does NOT matter.

Examples:

str1 = 'Angela T: wrote about Spiderman, Miah B: no Spiderman, Adrian R: wrote about Spiderman'
str2 = 'Tom B: no Spiderman, Justin N: no Spiderman, Emily B: wrote about Spiderman'
***********************************************************************/

let spiderManWriters = (string) => {
    let arr = string.split(", ")
    console.log(arr)
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i]
        if (ele.includes("no")) {
            let key = ele.split(": ")[0]
            let value = ele.split(": ")[1]
            obj[key] = value
        }
    }
    return obj
}
/*
TODO - Create a function that accepts a string and converts it to an array
that splits at every comma
TODO - Create an empty object
TODO - Create a for loop to iterate through each element of the array
TODO - Assign a variable that tracks the element at every index
TODO - Create an if statement that searches for "no"
TODO - Storing the key and value at the index between the front and back of the colon
TODO - Assign the key and value variable into the object
TODO - Return object
*/


str1 = 'Angela T: wrote about Spiderman, Miah B: no Spiderman, Adrian R: wrote about Spiderman'
str2 = 'Tom B: no Spiderman, Justin N: no Spiderman, Emily B: wrote about Spiderman'
spiderManWriters(str1)
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try{
    module.exports = spiderManWriters;
} catch(e){
    module.exports = null;
}
