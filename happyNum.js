var isHappy = function(n) {
    function getSum(num){
        let sum = 0;
        while(num>0){
            const digit = num % 10;
            sum += digit * digit;
            num =   Math.floor(num/10)
        }
        return sum;
    }

    while( n!== 1 && n!== 4){
        n = getSum(n);
    }
    return n===1;
};

console.log(isHappy(19));