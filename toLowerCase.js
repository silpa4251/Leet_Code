var toLowerCase = function (s) {
  let res = "";
  for (const char of s) {
    const index = char.charCodeAt(0);
    if (index >= 65 && index <= 90) {
      res += String.fromCharCode(index + 32);
    } else {
      res += char;
    }
  }
  return res;
};
console.log(toLowerCase("HeLlo"));
