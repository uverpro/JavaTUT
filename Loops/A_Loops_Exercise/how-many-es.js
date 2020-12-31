function howManyEs (str) {
    let count = 0;
    for (i = 0; i < str.length; i++)
        if (str[i] === "e") {
            count += 1;
        }
        return count;
    }

    console.log(howManyEs("To be, or not to be, that is the question.")); // 4
    console.log(howManyEs("eeeeee o, hi ho!")); // 6
