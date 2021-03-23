// THE RECURSIVE CALL STACK

function echo(word) {
    if (word.length > 1) {
        console.log(word.toUpperCase());

        let response = echo(word.slice(1));

        console.log(response);

        return word;
    } else {
        console.log(word.toUpperCase());
        return word;
    }
};

echo("howdy");

// HOWDY   // 5    <= this console.log is UNINTERRUPTIVE
// OWDY    // 7
// WDY     // 7
// DY      // 7
// Y       // 13
// y       //
// dy      //
// wdy     //
// owdy    //
