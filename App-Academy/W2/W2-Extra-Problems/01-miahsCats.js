/***********************************************************************
Write a FAT ARROW function `miahsCats(obj)` that takes an object, containing
extremely important information about Miah's cats as an argument
and returns an integer representing how many keys and values
in the input object containing the string "cute" or "adorable".

****NOTE: You should account for upper and lowercase letters!****
Checkout MDN documentation on how to solve this issue.


Examples:

let obj1 = {"Finn": "Smart lil boy, maximum cuTe", "Jake": "Not a dog, still cUte"}
miahsCats(obj1) // 2

let obj2 = {"CuteFace": "Has an adoRable face, loves snuggles", "Baby": "Very chonky lady, adorable fluffy face"}
miahsCats(obj2) // 3

let obj3 = {"Princess": "So much sass, cute AND fluffy", "adorable-boy": "Cute and funny"}
miahsCats(obj3) // 3

***********************************************************************/

let miahsCats = obj => {
    let counter = 0; //! initalize counter variable; 

    for (key in obj) { //! loops through object, and grabs all the keys. 

        let values = obj[key].toLowerCase(); //! setting values variable to =  obj[key] <= which is equal to values of Obj, and lowercasing it all.


        let keys = key.toLowerCase(); //! setting keys to the key of the object, and lowercasing it all. 

        if (values.includes('cute') || values.includes('adorable')) { //! checking if values includes the string of cute or adorable 


            counter++; //! increments counter by one if the if statement returns true;
        }

        if (keys.includes('cute') || keys.includes('adorable')) {     //! checking if keys includes the string of cute or adorable 
            counter++; //! increments counter by one if the if statement returns true;
        }

    }
    return counter; //! returns counter; 
}

//TODO:     logic, creating a counter, 
//Todo      accessing keys in an object. 
//todo      after accessing keys, access values of the key using bracket notation . 
//todo      for this specific question, lets lowercase all keys and values in the object . 
//todo      then check if the keys and values contains a string of 'cute'   OR (||)    'adorable' 
//todo      increment counter by one. 
//todo      return counter ( integer );

// ? in a more condense way of writing miahsCats 


    // let miahsCats = obj => {
    //     const keys = Object.keys(obj).map((key) => key.toLowerCase());
    //     const values = Object.values(obj).map((value) => value.toLowerCase());
    //     return keys.concat(values).filter((element) => element.includes('cute') || element.includes('adorable')).length;
    // }



let obj1 = { "Finn": "Smart lil boy, maximum cuTe", "Jake": "Not a dog, still cUte" }
miahsCats(obj1) // 2

let obj2 = { "CuteFace": "Has an adoRable face, loves snuggles", "Baby": "Very chonky lady, adorable fluffy face" }
miahsCats(obj2) // 3

let obj3 = { "Princess": "So much sass, cute AND fluffy", "adorable-boy": "Cute and funny" }
miahsCats(obj3) // 3
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = miahsCats;
} catch (e) {
    module.exports = null;
}