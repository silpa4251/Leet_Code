var plusOne = function (digits) {
  let sum = BigInt(digits.join("")) + BigInt(1);
  return sum.toString().split("").map(Number);
};
let digits = [9];
console.log(plusOne(digits));
