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
// Y       // 13   <= word.length is less than 1, so running from line 12, the else condtional
/* Here's where things turn around for stack. We've made all our recursive calls.
The "else" conditional is base case. We've stopped recursion
and now we have to clear existing stack frames.*/
// y       // 14
// dy      // 11
// wdy     //
// owdy    //
