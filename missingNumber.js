var missingNumber = function(nums) {
    let n = nums.length;
    let sum = nums.reduce((acc,val) => acc+val,0);
    let expSum = n * (n+1) /2;
    let out = expSum - sum;
    return out;
};
console.log(missingNumber([3,0,1]));
