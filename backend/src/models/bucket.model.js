// Buckets are either expenses or incomes
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expense = new Schema({
    name: { type: String, required: true},
    fixed: { type: Boolean, required: true },
    amount: { type: Number, required: true},
    spent: { type: Number, required: true},
    fund: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Income"
    }
});

const income = new Schema({
    name: { type: String, required: true},
    amount: { type: Number, required: true},
});

const Expense = mongoose.model('Expense', expense);
const Income = mongoose.model('Income', income);

module.exports = {
    Expense,
    Income
}