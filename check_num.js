var areNumbersAscending = function(s) {
    let preCount = 0;
    let array = s.split(" ");
    for(let num of array){
        if(!isNaN(num)){
            let current = parseInt(num);
            if(current <= preCount){
                return false;
            }
            preCount = current;
        }
    }
    return true;
};
console.log(areNumbersAscending("hello world 5 x 5"))