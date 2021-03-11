function removeSmallWords (str) {
    // let results = [];
    let split = str.split(" ");
    console.log(split, `<--- this is the split string`);
    // for (let i = 0; )
        let joined = split.join(" ");
        console.log(joined, `<-- this is the joined string`);
};

removeSmallWords(`the cat is sooooooo awesome`);
