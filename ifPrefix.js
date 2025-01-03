var isPrefixString = function(s, words) {
    let str = "";
    for(word of words){
        str += word;
        if(str === s){
            return true;
        }
    }
    return false;
};

console.log(isPrefixString("iloveleetcode",["i","love","leetcode","apples"]))