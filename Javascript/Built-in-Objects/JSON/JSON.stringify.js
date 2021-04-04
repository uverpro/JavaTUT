// JSON.stringify()
// The JSON.stringify() method converts a JavaScript object or value to a JSON string,
    // optionally replacing values if a replacer function is specified
    // or optionally including only the specified properties if a replacer array is specified.



console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""




// Syntax
JSON.stringify(value[, replacer[, space]])

// Parameters

// value
    // The value to convert to a JSON string.

// replacer (Optional)
/*  A function that alters the behavior of the stringification process, or an array of String
    and Number that serve as an allowlist for selecting/filtering the properties
    of the value object to be included in the JSON string.
    If this value is null or not provided, all properties of the object are included
    in the resulting JSON string. */

// space (Optional)
/*  A String or Number object that's used to insert white space into the output JSON string
    for readability purposes.
    If this is a Number, it indicates the number of space characters to use as white space;
    this number is capped at 10 (if it is greater, the value is just 10).
    Values less than 1 indicate that no space should be used.

    If this is a String, the string (or the first 10 characters of the string,
    if it's longer than that) is used as white space. If this parameter is not
    provided (or is null), no white space is used. */

// Return value
// A JSON string representing the given value.

// Exceptions
// Throws a TypeError ("cyclic object value") exception when a circular reference is found.
// Throws a TypeError ("BigInt value can't be serialized in JSON")
// when trying to stringify a BigInt value.


// Description
// JSON.stringify() converts a value to JSON notation representing it:

/*If the value has a toJSON() method, it's responsible to define what data will be serialized.

Boolean, Number, and String objects are converted to the corresponding primitive
values during stringification, in accord with the traditional conversion semantics.

undefined, Functions, and Symbols are not valid JSON values.
If any such values are encountered during conversion they are either omitted
(when found in an object) or changed to null (when found in an array). JSON.stringify()
can return undefined when passing in "pure" values like JSON.stringify(function(){})
or JSON.stringify(undefined).

All Symbol-keyed properties will be completely ignored, even when using the replacer function.

The instances of Date implement the toJSON() function by returning a string
(the same as date.toISOString()). Thus, they are treated as strings.

The numbers Infinity and NaN, as well as the value null, are all considered null.

All the other Object instances (including Map, Set, WeakMap, and WeakSet) will
have only their enumerable properties serialized. */


// Examples
// Using JSON.stringify
JSON.stringify({});                    // '{}'
JSON.stringify(true);                  // 'true'
JSON.stringify('foo');                 // '"foo"'
JSON.stringify([1, 'false', false]);   // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 });              // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))
// '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String('false'), new Boolean(false)]);
// '[3,"false",false]'

// String-keyed array elements are not enumerable and make no sense in JSON
let a = ['foo', 'bar'];
a['baz'] = 'quux';      // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });
// '{"x":[10,null,null,null]}'

// Standard data structures
JSON.stringify([new Set([1]), new Map([[1, 2]]), new WeakSet([{a: 1}]), new WeakMap([[{a: 1}, 2]])]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Uint8Array([1]), new Uint8ClampedArray([1]), new Uint16Array([1]), new Uint32Array([1])]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({ x: 5, y: 6, toJSON(){ return this.x + this.y; } });
// '11'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol';
  }
});
// undefined

// Non-enumerable properties:
JSON.stringify( Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }) );
// '{"y":"y"}'

// BigInt values throw
JSON.stringify({x: 2n});
// TypeError: BigInt value can't be serialized in JSON



// The replacer parameter

// The replacer parameter can be either a function or an array.

/* As a function, it takes two parameters: the key and the value being stringified.
    The object in which the key was found is provided as the replacer's this parameter.

Initially, the replacer function is called with an empty string as key representing
    the object being stringified. It is then called for each property on the object
    or array being stringified.

It should return the value that should be added to the JSON string, as follows:

If you return a Number, String, Boolean, or null, the stringified version of that value
is used as the property's value.
If you return a Function, Symbol, or undefined, the property is not included in the output.
If you return any other object, the object is recursively stringified, calling the replacer
function on each property.

Note: You cannot use the replacer function to remove values from an array.
If you return undefined or a function then null is used instead.

Note: If you wish the replacer to distinguish an initial object from a key with an empty
string property (since both would give the empty string as key and potentially an object as value),
you will have to keep track of the iteration count
(if it is beyond the first iteration, it is a genuine empty string key). */
