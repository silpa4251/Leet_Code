var findWords = function (words) {
  let out = [];
  let row = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  for (let i = 0; i < words.length; i++) {
    let found = false;
    for (word of row) {
      for (let j = 0; j < words[i].length; j++) {
        if (word.indexOf(words[i][j].toLowerCase()) == -1) {
          found = false;
          break;
        }
        found = true;
      }
      if (found == true) {
        out.push(words[i]);
      }
    }
  }
  return out;
};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
