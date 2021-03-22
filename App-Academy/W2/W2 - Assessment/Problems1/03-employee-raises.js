/*******************************************************************************

Your company is giving every employee earning less than $50,000 a 10% raise!

Write a function `employeeRaises(peopleObj)` that takes an array of objects
containing employee names and their salaries and returns an array containing
the employees that need raises, along with their new salaries.

Hint: It might be useful to create helper functions for this task.
*******************************************************************************/

function bonus(employee) {
    employee.salary *= 1.1;
    return employee;
};

function employeeRaises(employees) {
    let newArr = [];
    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i]; // { name: 'Alice', salary: 80000 } etc
        if (employee.salary < 50000) {
            newArr.push(bonus(employee));
        }
    }
    return newArr;
};

let employees = [{name: "Alice", salary: 80000},
             {name: "Bob", salary: 40000},
             {name: "Carol", salary: 60000},
             {name: "Dan", salary: 70000},
             {name: "Ellen", salary: 100000}]

console.log(employeeRaises(employees)); // [ { name: 'Bob', salary: 44000 } ]
