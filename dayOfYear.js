var dayOfYear = function(date) {
    const [year,month,day] = date.split('-').map(Number);
    const days = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(year%4 === 0 && year%100 !==0|| year % 400 === 0){
        days[1]=29;
    };
    const out = days.slice(0,month -1).reduce((sum,days) => sum+days,0)+day;
    return out;
};
console.log(dayOfYear("2003-02-06"));
