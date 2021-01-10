function divisibleRange (min, max, num) {
    for (i = num; i < max; i += num)
    if (i > min) {
    console.log(i)
    }
};

divisibleRange(17, 40, 9);
divisibleRange(10, 24, 4);
