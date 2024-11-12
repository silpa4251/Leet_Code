var countConsistentStrings = function(allowed, words) {
    let allowedSet = new Set(allowed);
    
    return words.filter(word => 
        [...word].every(char => allowedSet.has(char))
    ).length;
};

console.log(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]));