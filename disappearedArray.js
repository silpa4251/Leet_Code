var findDisappearedNumbers = function(nums) {
    let n = nums.length;
    let arr = new Set(nums);
    let out =[];
    for(i=1;i<=n;i++){
        if(!arr.has(i)){
            out.push(i);
        }
    }
    return out;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
