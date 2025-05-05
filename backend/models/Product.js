const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    inStock: Boolean,
    stateCodes: [String],
    distributor: Boolean
});

module.exports = mongoose.model('Product', productSchema);
