var addBinary = function (a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};
let a = "1010";
let b = "1011";
console.log(addBinary(a, b));
