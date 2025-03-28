Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, item) => {
    const key = fn(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
};
const arr = [{ id: "1" }, { id: "1" }, { id: "2" }];
const fn = function (item) {
  return item.id;
};
const groupbyid = arr.groupBy(fn);
console.log(groupbyid);
