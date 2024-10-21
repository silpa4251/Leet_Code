var compactObject = function (obj) {
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  if (typeof obj !== "object") return obj;
  const compacted = {};
  for (const key in obj) {
    let value = compactObject(obj[key]);
    if (value) compacted[key] = value;
  }
  return compacted;
};
let obj = [null, 0, false, 1];
console.log(compactObject(obj));
