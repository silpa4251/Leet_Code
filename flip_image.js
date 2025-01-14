var flipAndInvertImage = function(image) {
    return image.map(num => num.reverse().map(n => n^1));
};
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))