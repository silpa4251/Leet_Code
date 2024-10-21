var isPalindrome = function (x) {
  if (x < 0) return false;
  let temp = x;
  let rev = 0;
  while (x > 0) {
    let n = x % 10;
    rev = rev * 10 + n;
    x = Math.floor(x / 10);
  }
  if (temp == rev) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome(121));
