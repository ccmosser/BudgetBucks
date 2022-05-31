const { Expense, Income } = require('../models/bucket.model');

module.exports = {
    createExpense,
    getExpenses,
    updateExpense,
    deleteExpense,
    createIncome,
    getIncomes,
    updateIncome,
    deleteIncome
}

/****************** CRUD Operations for Expense ******************/

// Create a new expense bucket
async function createExpense(expenseData) {
    const expense = new Expense(expenseData);
    return await expense.save();
}

// Get all expenses in the database
async function getExpenses() {
    return await Expense.find();
}

// Update the expense with given id, with new expense data
async function updateExpense(expenseId, newExpense) {
    return await Expense.updateOne({ _id: expenseId }, newExpense);
}

// Delete the expense with the given id
async function deleteExpense(expenseId) {
    return await Expense.deleteOne({ _id: expenseId });
}

/****************** CRUD Operations for Income ******************/

// Create a new income bucket
async function createIncome(incomeData) {
    const income = new Income(incomeData);
    return await income.save();
}

// Get all incomes in the database
async function getIncomes() {
    return await Income.find();
}

// Update the income with the given id, with the new income data
async function updateIncome(incomeId, newIncome) {
    return await Income.updateOne({ _id: incomeId }, newIncome);
}

// Delete the income with the given id
async function deleteIncome(incomeId) {
    return await Income.deleteOne({ _id: incomeId });
}