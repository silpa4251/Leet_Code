
function isPrime(num) {
    if (num < 2) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false;

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false; 
    }

    return true; 
}

var primePalindrome = function(n) {
   if (n >= 8 && n <= 11) return 11
  const numOfDigits = ('' + n).length
  for (let i = numOfDigits; i < 10 ** numOfDigits; i++) {
    const str = '' + i
    let strReverse = str.split('').reverse().join('')
    const palindromeNum = parseInt(str + strReverse.slice(1))
    if (palindromeNum >= n) {
      if (isPrime(palindromeNum)) {
        return palindromeNum
      }
    }
  }
};

console.log(primePalindrome(13));