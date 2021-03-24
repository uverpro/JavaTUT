/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.
***********************************************************************/

function flatten(array) {
  debugger;
  let newArray = [];
  array.forEach(function (el) {
    if (Array.isArray(el)) {
      debugger;
      let flattenEl = flatten(el);
      newArray.push(...flattenEl);
    } else {
      debugger;
      newArray.push(el);
    }
  });
  return newArray;
}

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
