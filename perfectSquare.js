var isPerfectSquare = function(num) {
    if(num < 1) return false;
    if(num === 1) return true;
    let left = 1;
    let right = num;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let sq = mid * mid;
        if(sq === num)
            return true;
        else if(sq > num){
            right = mid - 1;
        } else left = mid +1 ;
    }
    return false;
};
console.log(isPerfectSquare(16));
