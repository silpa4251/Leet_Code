var chunk = function (arr, size) {
  let len = arr.length;
  let out = [];
  for (let i = 0; i < len; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
};

let arr = [1, 2, 3, 4, 5];

console.log(chunk(arr, 2));
