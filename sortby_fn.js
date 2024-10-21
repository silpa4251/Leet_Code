var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
let arr = [
  [3, 4],
  [5, 2],
  [10, 1],
];
let sortedArr3 = sortBy(arr, (x) => x[1]);
console.log(sortedArr3);
