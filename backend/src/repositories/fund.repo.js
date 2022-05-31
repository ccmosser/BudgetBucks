const Fund = require('../models/fund.model');

module.exports = {
    createFund,
    getFunds,
    updateFund,
    deleteFund
}

/****************** CRUD Operations for Fund ******************/

// Create a new fund
async function createFund(fundData) {
    const fund = new Fund(fundData);
    return await fund.save();
}

// Get all funds in the database
async function getFunds() {
    return await Fund.find();
}

// Update fund with the given id, with the new fund data
async function updateFund(fundId, newFund) {
    return await Fund.updateOne({ _id: fundId }, newFund);
}

// Delete fund with the given id
async function deleteFund(fundId) {
    return await Fund.deleteOne({ _id: fundId });
}