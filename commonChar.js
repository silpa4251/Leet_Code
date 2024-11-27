var commonChars = function(words) {
    let common = [...words[0]];
    for(let i =1; i< words.length; i++){
        let currentWord = [...words[i]];
        common = common.filter((char) =>{
            let index = currentWord.indexOf(char);
            if(index!== -1){
                currentWord.splice(index,1);
                return true;
            }
            return false;
        } )
    }
    return common;
};

console.log(commonChars(["bella","label","roller"]));