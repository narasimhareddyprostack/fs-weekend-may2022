let prices = [9, 99, 199, 299]
//how to read array
console.log(prices)
//how to read array values
/* for (let i = 0; i <= prices.length - 1; i++) {
    console.log(prices[i])
}
 */
for (price of prices) {
    console.log(price)
}