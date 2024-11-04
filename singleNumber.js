
var singleNumber = function(nums) {
    let res = 0;
    for(num of nums){
        res ^= num;
    }
    return res;
};
console.log(singleNumber([4,1,2,1,2]));