var sortArrayByParity = function(nums) {
    return  nums.filter(num => num%2 === 0).concat(nums.filter(num => num% 2 !==0));
 };

 console.log(sortArrayByParity([3,1,2,4]));