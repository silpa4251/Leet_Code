var climbStairs = function (n) {
  if (n === 1) return 1;
  let step = new Array(n + 1).fill(0);
  step[0] = 1;
  step[1] = 1;
  for (let i = 2; i <= n; i++) {
    step[i] = step[i - 1] + step[i - 2];
  }
  return step[n];
};

console.log(climbStairs(4));
