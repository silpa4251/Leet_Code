var checkIfExist = function(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i!== j && arr[j] === 2*arr[i]){
                return true;
            }
        }
    }
    return false;
};

const arr = [10, 2, 5, 3];
console.log(checkIfExist(arr)); 