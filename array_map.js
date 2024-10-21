var map = function (arr, fn) {
  const number = [];
  for (let i = 0; i < arr.length; i++) {
    number.push(fn(arr[i], i));
  }
  return number;
};
console.log(
  map([1, 2, 3], function plusone(n) {
    return n + 1;
  })
);
