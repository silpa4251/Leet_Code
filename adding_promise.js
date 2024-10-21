var addTwoPromises = async function (promise1, promise2) {
  const res1 = await promise1;
  const res2 = await promise2;
  return res1 + res2;
};
let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

console.log(addTwoPromises(promise1, promise2));
