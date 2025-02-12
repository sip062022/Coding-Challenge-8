// Task 1: Function Declaration //

function calculateSalary(baseSalary, bonus, taxRate) {  // Declare function and variables
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);  // Defines netSalary and formula
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);  // Console log the netSalary to 2 decimal places
}

calculateSalary(5000,500,0.1); // Expected Output: "Net Salary: $5000.00"
calculateSalary(7000,1000,0.15); // Expected Output: "Net Salary: $6950.00"

// Task 2: Function Expression //

function calculateDiscount(price, discountRate) { // Declare function and variables
    let finalPrice = price - (price * discountRate); // Defines finalPrice and the formula
    console.log(`Final Price: $${finalPrice.toFixed(2)}`); // Console log the finalPrice to 2 decimal places
}

calculateDiscount(100, 0.2); // Expected Output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected Output: "Final Price: $212.50"