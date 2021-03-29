/***********************************************************************
Write a function `morseCode` that takes an array containing a series
of either 'dot' or 'dash' strings. Your function should `console.log`
each string in order, followed by a pause of 100ms after each `dot`
and 300ms after each `dash`.
***********************************************************************/

function morseCode(code) {
    if (code.length === 0) {
      return;
    }
    let ele = code[code.length -1];
    if (ele === "dot") {
      setTimeout(() => {
        console.log("dot");
      }, 100);
    } else {
        setTimeout(() => {
          console.log("dash");
      }, 300);
    }
    return morseCode(code.slice(0, -1));
  }
  let code = ["dot", "dash", "dot"];

  morseCode(code);
