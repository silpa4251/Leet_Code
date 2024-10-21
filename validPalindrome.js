
      var isPalindrome = function (s) {
        let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        return str === str.split("").reverse().join("");
      };
      let s = "A man, a plan, a canal: Panama";
      console.log( isPalindrome(s));
      
 