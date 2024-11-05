var sumOfUnique = function(nums) {
    return nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num))
    .reduce((sum,num) => sum+num,0);
};

console.log(sumOfUnique([1,2,3,2]));