var argumentsLength = function (...args) {
  let count = 0;
  for (let i = 0; i < args.length; i++) count++;
  return count;
};

console.log(argumentsLength({}, null, "3"));
