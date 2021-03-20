/***********************************************************************
Write a function using fat arrow syntax, `averageCost` that takes in an array of item
objects, and returns the average cost of all items rounded to the nearest cent with
a dollar sign in front. If no price is given for an item, the cost is one dollar.

Hint: Look up `toFixed()` on MDN

Examples:

const items1 = [
    {item: "tennis ball", cost: 3.32, color: "yellow"},
    {item: "mug", cost: 2.50, size: "medium"},
    {item: "candle", cost: 4.75, scent: "vanilla"},
    {item: "teddy bear", cost: 6.00, color: "brown"}
];

const items2 = [
    {item: "burger", cost: 2.75},
    {item: "fries", size: "small"},  // Default $1
    {item: "soda", flavor: "fanta"}  // Default $1
]

averageCost(items1) // '$4.14'
averageCost(items2) // '$1.58'


***********************************************************************/

const averageCost = (arr) => {
    let sum = arr.reduce((el, sum = 0) => (sum += el));

    let avg = sum / arr.length;
    return avg;
}

const items1 = [
    {item: "tennis ball", cost: 3.32, color: "yellow"},
    {item: "mug", cost: 2.50, size: "medium"},
    {item: "candle", cost: 4.75, scent: "vanilla"},
    {item: "teddy bear", cost: 6.00, color: "brown"}
];

const items2 = [
    {item: "burger", cost: 2.75},
    {item: "fries", size: "small"},  // Default $1
    {item: "soda", flavor: "fanta"}  // Default $1
]

console.log(averageCost(items1)); // '$4.14'
console.log(averageCost(items2)) // '$1.58'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = averageCost;
} catch(e) {
    module.exports = null;
}
