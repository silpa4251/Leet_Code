var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const output = [];
    let count = 0;
    const totalpromise = functions.length;
    functions.forEach((fn, index) => {
      fn()
        .then((result) => {
          output[index] = result;
          count += 1;
          if (count === totalpromise) {
            resolve(output);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
    if (totalpromise === 0) {
      resolve([]);
    }
  });
};
console.log(
  promiseAll([
    () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
    () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
    () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
  ])
);
