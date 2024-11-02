var findDuplicate = function(nums) {
    let n=nums.length;
    nums.sort((a,b)=> a-b);
    for(let i=0;i<n;i++){
        if(nums[i] === nums[i+1]) return nums[i];
    }
    
};
console.log(findDuplicate([1,3,4,2,2]));