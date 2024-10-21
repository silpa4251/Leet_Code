var once = function (fn) {
  let call = false;
  let res;
  return function (...args) {
    if (!call) {
      call = true;
      res = fn(...args);
      return res;
    }
    return undefined;
  };
};
let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
