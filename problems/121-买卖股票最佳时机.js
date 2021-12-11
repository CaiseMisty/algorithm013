var maxProfit = function(prices) {
  if (prices.length < 2) return 0;
  let profit = 0;
  let minPrice = prices[0];
  for (let val of prices) {
    if (val < minPrice) minPrice = val;
    profit = Math.max(profit, val - minPrice);
  }
  return profit;
};