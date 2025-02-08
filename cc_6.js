//Task 1
function calculateProfit(costPrice, sellingPrice, unitsSold){
    return (sellingPrice - costPrice) * unitsSold;
}
//Test Data to ensure function is correct
console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`)
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`)

//Task 2
function calculateSalesTax(amount, taxRate) {
    return (amount * taxRate).toFixed(2)
}//Included toFixed so there wouldn't be any lingering zeros
//Logging tax for varying amounts
console.log(`Sales Tax: $${calculateSalesTax(100, .07)}`)
console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`)

