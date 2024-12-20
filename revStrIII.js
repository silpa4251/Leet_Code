
var reverse = function(s){
    return s.split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(" ");
}
console.log(reverse("Let's take LeetCode contest"));




