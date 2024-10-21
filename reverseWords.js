var reverseWords = function (s) {
  let res = [];
  let words = s.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] == "") {
      continue;
    }
    res.push(words[i]);
  }
  return res.reverse().join(" ");
};

console.log(reverseWords("a  good   day  "));
