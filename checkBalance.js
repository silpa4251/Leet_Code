var isBalanced = function(num) {
    let even = 0, odd = 0;
    for(let i=0;i<num.length;i++) {
        if( i % 2 === 0){
            even+=Number(num[i]);
        }
        else{
            odd+=Number(num[i]);
        }
    }
    return even === odd;
};

console.log(isBalanced("2211"));