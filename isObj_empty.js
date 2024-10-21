var isEmpty = function (obj) {
  return Object.keys(obj).length == 0;
};
console.log(isEmpty([null, false, 0]));
console.log(isEmpty({}));
