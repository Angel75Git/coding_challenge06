//Task 1
function calculateProfit(costPrice, sellingPrice, unitsSold){
    return (sellingPrice - costPrice) * unitsSold;
}
//Test Data to ensure function is correct
console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`)
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`)
