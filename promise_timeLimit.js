var timeLimit = function (fn, t) {
  return async function (...args) {
    let f1 = fn(...args);
    let f2 = new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });
    return Promise.race([f1, f2]);
  };
};

async function promiseExceed(limit) {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Function completed"), limit)
  );
}

const limitedFunction = timeLimit(promiseExceed, 2000);

limitedFunction(1000).then(console.log).catch(console.error);
limitedFunction(3000).then(console.log).catch(console.error);
