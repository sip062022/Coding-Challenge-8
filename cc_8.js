// Task 1: Function Declaration //

function calculateSalary(baseSalary, bonus, taxRate) {  // Declare function and variables
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);  // Defines netSalary and formula
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);  // Console log the netSalary to 2 decimal places
}

calculateSalary(5000, 500, 0.1); // Expected Output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected Output: "Net Salary: $6950.00"

// Task 2: Function Expression //

function calculateDiscount(price, discountRate) { // Declare function and variables
    let finalPrice = price - (price * discountRate); // Defines finalPrice and the formula
    console.log(`Final Price: $${finalPrice.toFixed(2)}`); // Console log the finalPrice to 2 decimal places
}

calculateDiscount(100, 0.2); // Expected Output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected Output: "Final Price: $212.50"

// Task 3: Arrow Function //

const calculateServiceFee = (amount, serviceType) => {  // Declare arrow function and variables
    let fee = 0;  // Defines initial fee as 0
    if (serviceType === "Premium") fee = amount * 0.15;  // 15% fee for premium service
    else if (serviceType === "Standard") fee = amount * 0.10;  // 10% fee for good service
    else fee = amount * 0.05; // 5% fee for all other service (Basic)

    console.log(`Service Fee: $${fee.toFixed(2)}`);  // Logs service fee to 2 decimal places
};

calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"

// Task 4: Parameters and Arguments //

function calculateRentalCost(days, carType, insurance = false) {  // Declares function and variables
    let carPrices = { "Economy": 40, "Standard": 60, "Luxury": 100 };  // Declares carPrices and their values
    let totalCost = (carPrices[carType] * days); // Defines formula without insurance
    if (insurance) {  // If statement for if insurance is true
        totalCost += (20 * days);  // Then total cost will be the original total cost plus $20/day
    };
    
    console.log(`Total Rental Cost: $${totalCost}`); // Logs total cost
};

calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"

// Task 5: Returning Values //

function calculateLoanPayment(principal, rate, time) { // Declares function and variables
    let totalPayment = principal + (principal * rate * time); // Defines formula to be used
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`); // Displays loan payment to 2 decimals
};

calculateLoanPayment(1000, 0.05, 2); // Expected output: "Total Payment: $1100.00"
calculateLoanPayment(5000, 0.07, 3); // Expected output: "Total Payment: $6050.00"

// Task 6: Higher-Order Functions //

let transactions = [200, 1500, 3200, 800, 2500]; // Declares the array transactions
let filterlargeTransactions = transactions.filter(transactions => transactions > 1000); // Filters array to amounts > 1000
console.log(filterlargeTransactions); // Expected output: [1500, 3200, 2500]

// Task 7: Closures //

function createCartTracker() {  // Declare function
    let totalValue = 0;  // Lets initial value be $0
    return function(expense) {  // Return the value that results from expense variable
        totalValue += expense;  // Adds each expense to the total value
        return `Total Cart Value: $${totalValue}`;  // Logs the total value
    };
};

let cart = createCartTracker();
console.log(cart(20)); // Expected Output: "Total Cart Value: $20"
console.log(cart(35)); // Expected Output: "Total Cart Value: $55"

// Task 8: Recursion in JavaScript //

function calculateSavings(years, amount) { // Declares function and variables
    if (years >= 10) return amount;  // Stops recursion after 10 years

    return calculateSavings(years + 1, amount * 1.05);  // New value will be 1.05 times that year's
};

console.log(`Projected Savings: $${calculateSavings(8, 1000).toFixed(2)}`);; // Expected output: "Projected Savings: $1102.50"
console.log(`Projected Savings: $${calculateSavings(5, 5000).toFixed(2)}`); // Expected output: "Projected Savings: $5525.63"