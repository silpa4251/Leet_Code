var maximumProduct = function(nums) {
    nums.sort((a,b) => a-b);
    let n = nums.length;
    const output1 = nums[n-1]*nums[n-2]*nums[n-3];
    const output2 = nums[0]*nums[1]*nums[n-1];
    return Math.max(output1,output2);
};

console.log(maximumProduct([-1,-2,-3,4,9,5]))