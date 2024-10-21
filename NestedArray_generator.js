var inorderTraversal = function* (arr) {
  for (num of arr) {
    if (Array.isArray(num)) {
      yield* inorderTraversal(num);
    } else yield num;
  }
};
const gen = inorderTraversal([1, [2, 3]]);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
