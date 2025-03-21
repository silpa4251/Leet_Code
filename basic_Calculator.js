var calculate = function (s) {
  let total = 0;
  let current = 0;
  let sign = 1;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char >= "0" && char <= "9") {
      current = current * 10 + parseInt(char);
    } else if (char === "+") {
      total += sign * current;
      sign = 1;
      current = 0;
    } else if (char === "-") {
      total += sign * current;
      sign = -1;
      current = 0;
    } else if (char === "(") {
      stack.push(total);
      stack.push(sign);
      total = 0;
      sign = 1;
    } else if (char === ")") {
      total += sign * current;
      current = 0;
      sign = stack.pop();
      total = stack.pop() + sign * total;
    }
  }
  total += sign * current;
  return total;
};
console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
