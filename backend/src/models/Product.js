const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_id: Number,
    name: String,
    price: Number,
    quantity: Number,
    due_date: Date,
});
module.exports = mongoose.model('Product', ProductSchema);