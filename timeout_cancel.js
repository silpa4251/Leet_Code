var cancellable = function (fn, args, t) {
  const timeout = setTimeout(() => fn(...args), t);
  const cancelFn = () => clearTimeout(timeout);
  return cancelFn;
};
const fn = (x) => x * 5;
const args = [2],
  t = 5000;
const cancelLog = cancellable(fn, args, t);
setTimeout(() => {
  cancelLog();
  console.log("Cancelled !");
}, 2000);
