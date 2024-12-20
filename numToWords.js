var numberToWords = function(num) {
    if(num === 0) return "Zero";
    const belowTwenty = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
    "Seventeen", "Eighteen", "Nineteen"
  ];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const thousands = ["", "Thousand", "Million", "Billion"];

  const numToWords = (n) => {
    let res ="";
    if(n >= 100){
        res += belowTwenty[Math.floor(n/100)] + " Hundred ";
        n %= 100;
    }

    if(n >= 20){
        res += tens[Math.floor(n/10)] + " ";
        n %= 10;
    }
    if(n > 0){
        res += belowTwenty[n]+ " ";
    }
    return res.trim();
  }

  let result = "";
  let index = 0;

  while(num > 0){
    let digit = num % 1000;
    if( digit > 0){
        result = numToWords(digit)+ " " + thousands[index]+ " " + result;
    }
    num = Math.floor(num / 1000 );
    index++;
  }
 return result.trim();
};

console.log(numberToWords(1234567));