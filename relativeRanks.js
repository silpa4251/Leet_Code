var findRelativeRanks = function(score) {
    const sorted = [...score].sort((a,b)=> b-a);
    const ranks = new Map ();
    sorted.forEach((val,index) => {
        if(index === 0){
            ranks.set(val,"Gold Medal");
        } else if(index === 1){
            ranks.set(val,"Silver Medal");
        } else if(index === 2){
            ranks.set(val,"Bronze Medal");
        } else{
            ranks.set(val,(index+1).toString());
        }
    });

    return score.map(val => ranks.get(val));

};

console.log(findRelativeRanks([10,3,8,9,4]));