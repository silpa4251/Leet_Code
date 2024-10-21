
        var expect = function(val) {
    return {
        toBe: (val2) => { if(val2 !== val) throw new Error('Not Equal')
            else return true;},
        notToBe: (val2) =>{ if(val2 === val) throw new Error('Equal');
        else return true;}
    };
};
console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
