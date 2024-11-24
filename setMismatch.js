var findErrorNums = function(nums) {
    let n = nums.length;
    let res = new Set();
    let dup, missing, sum = 0;
    for(let num of nums){
        if(res.has(num)){
            dup = num;
        } else {
            res.add(num);
            sum += num;
        }
    }

    const expected = (n * (n + 1)) / 2;
    missing = expected - sum;

    return [dup, missing];

};

console.log(findErrorNums([1,2,3,4,4,6]));