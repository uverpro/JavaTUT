function everyOtherLetter(str) {
    let nuStr = '';
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (i % 2 === 0) {
        nuStr += letter.toUpperCase();
        } else {
        nuStr += letter
  }
}
    return nuStr;
};
console.log(everyOtherLetter("hello"));
