var scoreOfParentheses = function(s) {
    let stack = [];
    let score = 0;
    for(const char of s){
        if(char === '('){
            stack.push(score);
            score = 0;
        } else {
            const lastScore = stack.pop();
            score = lastScore + Math.max(2 * score, 1);
        }
    }
    return score;
};

console.log(scoreOfParentheses("(())"));