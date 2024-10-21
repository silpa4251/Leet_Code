var reverseVowels = function (s) {
  const vowels = new Set("aeiouAEIOU");
  let strarr = s.split("");
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !vowels.has(s[left])) {
      left++;
    }
    while (left < right && !vowels.has(s[right])) {
      right--;
    }
    if (left < right) {
      [strarr[left], strarr[right]] = [strarr[right], strarr[left]];
      left++;
      right--;
    }
  }
  return strarr.join("");
};
console.log(reverseVowels("IceCreAm"));
