var repeatedCharacter = function(s) {
    let letter = new Set();
    for(let char of s){
        if(letter.has(char)){
            return char;
        }
        letter.add(char);
    }
};

console.log(repeatedCharacter("abccbaacz"));