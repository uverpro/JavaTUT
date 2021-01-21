let greaterResult = function (num, cb1, cb2) {
    let res1 = cb1(num)
    let res2 = cb2(num)

    if (res1 > res2) {
        return res1
    } else {
        return res2
    }
}

let doubler = function (n) {
    return n * 2;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterResult(5, doubler, squarer));

// 1. Line 20. num is defined as "5"
// 2. Line 20. Evoke "doubler"
// 3. Line 12/13. 5 * n = "10" (res1)
// 4. Line 20. Evoke "squarer".
// 5. Line 16/17. 5 * 5 aka n * n = 25. (res2)
// 6. Line 5 - 8. (10 > 25) = false, return res2 (25)
// 7. Line 20. Console Log return, 25
