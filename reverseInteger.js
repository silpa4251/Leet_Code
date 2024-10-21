var reverse = function (x) {
  let out = 0;
  let sign = Math.sign(x);
  x = Math.abs(x);

  while (x > 0) {
    let d = x % 10;
    out = 10 * out + d;
    x = Math.floor(x / 10);
  }
  out = out * sign;
  if (out < Math.pow(-2, 31) || out > Math.pow(2, 31) - 1) {
    return 0;
  }
  return out;
};
console.log(reverse(-321));
