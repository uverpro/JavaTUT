function pigLatinWord(word) {
    for (let i = 0; i < word.length; i++) {
        let firstLetter = word[0];
      let vowel = "a,e,i,o,u";
      if (firstLetter.includes(vowel)) {
        return `${word}yay`;
      }
    }
  };

  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"
