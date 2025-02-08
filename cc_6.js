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

//Task 3
const calculateBonus = (salary, performanceRating) => {
//Create object percent to house different ratings    
    let Percent = { 
        "Excellent": 0.20,
        "Good": 0.10,
        "Average": 0.05
    }
    let bonus = salary * (Percent[performanceRating])
    return bonus
}
//logging bonus w/ different ratings
console.log(`Yay! Bonus: $${calculateBonus(5000, "Excellent")}`);

console.log(`Yay! Bonus: $${calculateBonus(7000, "Good")}`);

//Task 4
function calculateSubscriptionCost(plan, months, discount = 0) {
    let service = {
        "Basic": 10,    //object to store plans
        "Premium": 20,
        "Enterprise": 50
    }
    return ((service[plan]) * months) - discount
}
let costPlan = calculateSubscriptionCost("Basic", 6, 10)
console.log(`Total Cost: $${costPlan}`);
//logging using the same variable to override function
costPlan = calculateSubscriptionCost("Premium", 12, 0)
console.log(`Total Cost: $${costPlan}`);

//Task 5
function convertCurrency(amount, exchangeRate) {
    return (amount * exchangeRate).toFixed(2)
}
//logging converted currency of various amounts
let converted = convertCurrency(100, 1.1);
console.log(`Converted Amount: $${converted}`);
converted = convertCurrency(250, 0.85);
console.log(`Converted Amount: $${converted}`);

//Task 6 
let orders = [200, 600, 1200, 450, 800];
function applyBulkDiscount(purchaseAmounts, discountFunciton){
    return purchaseAmounts.map(discountFunciton);
}
//Recalled the applyBulkDiscount from parameter above (discountFunction)
let discount10 = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
console.log(discount10);

//Task 7
function createExpenseTracker(){
    let counter = 0;
    return function(amount){
        counter += amount;
        return counter
    };    
}
//Keeping running total
let tracker = createExpenseTracker()
console.log(tracker(200));
console.log(tracker(350));

