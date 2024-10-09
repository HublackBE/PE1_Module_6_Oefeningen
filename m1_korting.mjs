function giveDiscount(price) {
    return price - price * 0.15;
}

let prices = [14.99, 11.99, 9.99, 24.49, 49.99, 89.95];

for(let i = 0; i < prices.length; i++) {
    console.log('€' + giveDiscount(prices[i]).toFixed(2));
}