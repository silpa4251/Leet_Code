var maximumGap = function(nums) {
    if(nums.length < 2) return 0;
    let sortedArray = nums.sort((a,b) => a-b);
    let maxGap = 0;
    for(let i=0; i< sortedArray.length-1; i++){
       maxGap = Math.max(maxGap,sortedArray[i+1] - sortedArray[i]);
    }
    return maxGap;
};

console.log(maximumGap([3,9,6,1]));