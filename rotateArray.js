var rotate = function(nums, k) {
    k = k % nums.length;
    if(k === 0){
        return nums;
    }
    const remaining = nums.splice(nums.length - k);
    nums.unshift(...remaining);
    return nums

};

console.log(rotate([1,2,3,4,5,6,7],3));