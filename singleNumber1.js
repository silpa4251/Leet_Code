var singleNumber = function(nums) {
    const d = {};

    for (let num of nums) {
        if (d[num] === undefined) d[num] = 1;
        else if (d[num] === 2) delete d[num];
        else d[num] += 1;
    }
    
    return parseInt(Object.keys(d)[0]);
};

console.log(singleNumber([0,1,0,1,0,1,99]));