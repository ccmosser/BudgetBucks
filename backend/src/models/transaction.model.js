const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    amount: { type: Number, required}
});

module.exports = mongoose.model('Transaction', schema);