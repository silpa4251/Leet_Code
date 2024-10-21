var searchRange = function (nums, target) {
  const search = (start, end) => {
    if (start > end) return [-1, -1];
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] > target) {
      return search(start, mid - 1);
    } else if (nums[mid] < target) {
      return search(mid + 1, end);
    } else {
      let newStart = mid;
      let newEnd = mid;
      while (nums[newStart] === target) {
        newStart--;
      }
      while (nums[newEnd] === target) {
        newEnd++;
      }
      return [newStart + 1, newEnd - 1];
    }
  };
  return search(0, nums.length - 1);
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
