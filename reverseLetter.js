
var reverseOnlyLetters = function(s) {
    let chars = s.split('');
    let left = 0;
    let right = s.length - 1;
    while(left< right) {
        if(!isletter(chars[left])){
            left++;
            continue;
        }

        if(!isletter(chars[right])){
            right--;
            continue;
        }
        [chars[left],chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
    }
    return chars.join('')
};

function isletter(char){
    return /[a-zA-Z]/.test(char);
}

console.log(reverseOnlyLetters("a-pl-is"));