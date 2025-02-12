// Task 1: Function Declaration //

function calculateSalary(baseSalary, bonus, taxRate) {  // Declare function and variables
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);  // Defines netSalary and formula
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);  // Console log the netSalary to 2 decimal places
}

calculateSalary(5000,500,0.1); // Expected Output: "Net Salary: $5000.00"
calculateSalary(7000,1000,0.15); // Expected Output: "Net Salary: $6950.00"