var longestCommonPrefix = function (strs) {
  let sorted = strs.sort();
  let prefix = "";
  let str1 = strs[0];
  let str2 = strs[strs.length - 1];
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      prefix += str1[i];
    } else {
      break;
    }
  }
  return prefix;
};

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
