var join = function (arr1, arr2) {
  let item = arr1.concat(arr2);
  const output = {};
  for (const obj of item) {
    if (!output[obj.id]) {
      output[obj.id] = obj;
      continue;
    }
    output[obj.id] = { ...output[obj.id], ...obj };
  }
  return Object.values(output);
};
let arr1 = [
  { id: 1, x: 1 },
  { id: 2, x: 9 },
];

let arr2 = [{ id: 3, x: 5 }];
console.log(join(arr1, arr2));
