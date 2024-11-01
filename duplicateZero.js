var duplicateZeros = function (arr) {
  let count = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) count++;
  }
  for (let i = n - 1; i >= 0; i--) {
    let pos = i + count;
    if (pos < n) {
      arr[pos] = arr[i];
    }
    if (arr[i] === 0) {
      count--;
      if (pos - 1 < n) {
        arr[pos - 1] = 0;
      }
    }
  }
  return arr;
};
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
