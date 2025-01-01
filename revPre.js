var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch);
    if(index !== -1) {
        let str = word.slice(0,index+1).split('').reverse().join('');
        return str+ word.slice(index+1);

    }
    else {
        return word;
    }
}; 

console.log(reversePrefix("abcdef","d"))