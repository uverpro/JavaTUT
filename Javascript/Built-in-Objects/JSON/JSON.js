// JSON

// The JSON object contains methods for parsing JavaScript Object Notation (JSON)
    // and converting values to JSON.
    // It can't be called or constructed, and aside from its two method properties,
    // it has no interesting functionality of its own.


// JavaScript and JSON differences
// JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and null.
    // It is based upon JavaScript syntax but is distinct from it: some JavaScript is not JSON.

// Objects and Arrays
    // Property names must be double-quoted strings; trailing commas are forbidden.
// Numbers
    // Leading zeros are prohibited. A decimal point must be followed by at least one digit.
    // NaN and Infinity are unsupported.

    {
        "browsers": {
          "firefox": {
            "name": "Firefox",
            "pref_url": "about:config",
            "releases": {
              "1": {
                "release_date": "2004-11-09",
                "status": "retired",
                "engine": "Gecko",
                "engine_version": "1.7"
              }
            }
          }
        }
      }
