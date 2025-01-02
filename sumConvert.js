var getLucky = function(s, k) {
    let nums = s.split("").map(char => char.charCodeAt(0)-96).join("");
    for(let i=0;i<k;i++){
        nums = nums.split("").reduce((acc,val) => acc+parseInt(val),0).toString();
    }
    return parseInt(nums);
};

console.log(getLucky("zbax",2))