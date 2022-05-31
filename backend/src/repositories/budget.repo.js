const Budget = require('../models/budget.model');

module.exports = {
    createBudget,
    getBudgets,
    getBudgetsByUser,
    updateBudget,
    deleteBudget
}

/****************** CRUD Operations for Budget ******************/

// Create a new budget
async function createBudget(budgetData) {
    const budget = new Budget(budgetData);
    return await budget.save();
}

// Get all budgets in the database
async function getBudgets() {
    return await Budget.find();
}

// Get all budgets associated with user
async function getBudgetsByUser(userId) {
    return await Budget.find({ userRef: userId });
}

// Update budget with id given with new budget object
async function updateBudget(budgetId, newBudget) {
    return await Budget.updateOne({ _id: budgetId }, newBudget);
}

// Delete budget with given id
async function deleteBudget(budgetId) {
    return await Budget.deleteOne({ _id: budgetId });
}