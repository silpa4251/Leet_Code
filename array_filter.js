var filter = function (arr, fn) {
  let number = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      number.push(arr[i]);
    }
  }
  return number;
};

console.log(
  filter([1, 2, 3], function firstIndex(n, i) {
    return i === 0;
  })
);
