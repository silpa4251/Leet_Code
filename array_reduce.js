var reduce = function (nums, fn, init) {
  let number = init;
  for (let i = 0; i < nums.length; i++) {
    number = fn(number, nums[i]);
  }
  return number;
};
console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr;
    },
    0
  )
);
