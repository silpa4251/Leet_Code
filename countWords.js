var countWords = function(words1, words2) {
    let count = 0;
    for(let i=0; i<words1.length; i++){
        let word = words1[i];
        const uniqueInWord1 = words1.indexOf(word) === words1.lastIndexOf(word);
        const includes = words2.indexOf(word) >=0;
        const uniqueInWord2 = words2.indexOf(word) === words2.lastIndexOf(word);
        if(uniqueInWord1 && includes && uniqueInWord2){
            count++;
        }
    }
    return count;
};