var mySqrt = function (x) {
  let start = 1;
  let end = Math.floor(x / 2);
  if (x === 1) {
    return 1;
  }
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      end = mid - 1;
    } else start = mid + 1;
  }
  return end;
};

console.log(mySqrt(64));
