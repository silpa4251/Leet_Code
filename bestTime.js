var maxProfit = function(prices) {
    if(prices.length === 0) return 0;
    let minPrice = prices[0];
    let maxProfit = 0;
    for(let i =1; i< prices.length ; i++ ){
        maxProfit = Math.max(maxProfit, prices[i]-minPrice);
        minPrice = Math.min(minPrice,prices[i]);
    }
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));