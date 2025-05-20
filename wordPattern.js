var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if(pattern.length !== words.length) return false;
    const charToWords = new Map();
    const wordsToChar = new Map ();

    for(let i=0; i< pattern.length;i++){
      const char = pattern[i];
      const word = words[i];

      if(charToWords.has(char) && charToWords.get(char)!== word) return false;
      if(wordsToChar.has(word) && wordsToChar.get(word)!== char) return false;

      charToWords.set(char, word);
      wordsToChar.set(word ,char);
            
        
    }
    return true;
};

console.log(wordPattern("abba","dog cat cat dog"));