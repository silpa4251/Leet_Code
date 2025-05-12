var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let currentCount = 0;
    for(let num of nums){
        if(num === 1){
            currentCount ++;
        }
        else
        {
            maxCount = Math.max(maxCount, currentCount);
            currentCount=0;
        }
    }
    return Math.max(maxCount, currentCount);
};

