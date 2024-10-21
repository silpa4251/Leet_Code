var flat = function (arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element) && n > 0) {
      result.push(...flat(element, n - 1));
    } else {
      result.push(element);
    }
  }
  return result;
};
console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
);
