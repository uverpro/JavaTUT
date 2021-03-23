function createDictionary(words, translate) {
    const dictionary = {};
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      dictionary[word] = translate(word);
    }
    return dictionary;
  }

  function questionMark(word) {
    return word + '?';
  }

  console.log(createDictionary(['hello', 'world'], questionMark)); // ???
