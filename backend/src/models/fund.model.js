const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: Stirng, required: true },
    goal: {
        hasGoal: { type: Boolean, required: true },
        goalAmount: { type: Number, required: false }
    },
    amount: { type: Number, required: true }
});

module.exports = mongoose.model('Fund', schema);