const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: { type: String, unique: true, required: true },
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true }
    },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', schema);