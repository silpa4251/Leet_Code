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
console.log(areNumbersAscending( "1 box has 3 blue 4 red 6 green and 12 yellow marbles"))