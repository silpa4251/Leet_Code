var removeElement = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
console.log(removeElement(nums, val));
