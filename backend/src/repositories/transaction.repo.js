const Transaction = require('../models/transaction.model');

module.exports = {
    createTransaction,
    getTransactions,
    updateTransaction,
    deleteTransaction
}

/****************** CRUD Operations for Transaction ******************/

// Create a new transaction
async function createTransaction(transactionData) {
    const transaction = new Transaction(transactionData);
    return await transaction.save();
}

// Get all transactions
async function getTransactions() {
    return await Transaction.find();
}

// Update transaction with the given id, with new transaction data
async function updateTransaction(transactionId, newTransaction) {
    return await Transaction.updateOne({ _id: transaction }, newTransaction);
}

// Delete transaction with the given id
async function deleteTransaction(transactionId) {
    return await Transaction.deleteOne({ _id: transactionId });
}