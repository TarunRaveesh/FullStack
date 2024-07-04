/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let totalSpentByCategory = {};
  transactions.forEach(transaction => {
    if (totalSpentByCategory[transaction.category]) {
      totalSpentByCategory[transaction.category] += transaction.price;
    } else {
      totalSpentByCategory[transaction.category] = transaction.price;
    }
  });

  return Object.keys(totalSpentByCategory).map(category => {
    return { [category]: totalSpentByCategory[category] };
  });
}

const transactions = [
  { itemName: 'Milk', category: 'Groceries', price: 3.50, timestamp: Date.now() },
  { itemName: 'Electricity Bill', category: 'Utilities', price: 75.00, timestamp: Date.now() },
  { itemName: 'Movie Ticket', category: 'Entertainment', price: 12.00, timestamp: Date.now() },
  { itemName: 'Bread', category: 'Groceries', price: 2.00, timestamp: Date.now() },
  { itemName: 'Dinner at Restaurant', category: 'Dining', price: 45.00, timestamp: Date.now() },
  { itemName: 'Concert Ticket', category: 'Entertainment', price: 50.00, timestamp: Date.now() },
  { itemName: 'Water Bill', category: 'Utilities', price: 30.00, timestamp: Date.now() },
  { itemName: 'Fruits', category: 'Groceries', price: 15.00, timestamp: Date.now() },
  { itemName: 'Lunch at Cafe', category: 'Dining', price: 25.00, timestamp: Date.now() },
  { itemName: 'Netflix Subscription', category: 'Entertainment', price: 10.00, timestamp: Date.now() }
];

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;