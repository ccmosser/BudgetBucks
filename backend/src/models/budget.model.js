const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, required: true },
    dates: {
        start: { type: Date, default: Date.now },
        end: Date
    },
    categories: {
        income: [{
            name: { type: String, required: true },
            incomes: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Income"
            }]
        }],
        expense: [{
            name: { type: String, required: true },
            expenses: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Expense"
            }]
        }]
    }
});

module.exports = mongoose.model('Budget', schema);