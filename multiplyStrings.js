var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  let n1 = num1.length,
    n2 = num2.length;
  const res = new Array(n1 + n2).fill(0);

  for (let i = n1 - 1; i >= 0; i--) {
    for (let j = n2 - 1; j >= 0; j--) {
      const p1 = i + j;
      const p2 = i + j + 1;
      let sum = res[p2] + Number(num1[i]) * Number(num2[j]);
      res[p2] = sum % 10;
      res[p1] += Math.floor(sum / 10);
    }
  }
  if (res[0] === 0) res.shift();
  return res.join("");
};
console.log(multiply("123", "45"));
