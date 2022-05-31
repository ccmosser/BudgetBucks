const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    bucketTypes: {
        type: String,
        required: true,
	    enum: ['Income', 'Expense'],
    },
    bucket: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "bucketTypes"
    }
});

module.exports = mongoose.model('Transaction', schema);