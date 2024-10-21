var backspaceCompare = function (s, t) {
  let s1 = [];
  let t1 = [];
  for (let i of s) {
    if (i === "#") {
      s1.pop();
    } else {
      s1.push(i);
    }
  }
  for (let j of t) {
    if (j === "#") {
      t1.pop();
    } else {
      t1.push(j);
    }
  }
  return s1.join("") === t1.join("");
};

console.log(backspaceCompare("ab##", "c#d#"));
