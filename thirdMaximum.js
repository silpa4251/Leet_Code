var thirdMax = function(nums) {
    let sorted = nums.sort((a,b)=> b-a);
    let arr = [...new Set(sorted)];
    if(arr.length >=3) return arr[2];
    else return arr[0];
};

console.log(thirdMax([3,2,1]));
