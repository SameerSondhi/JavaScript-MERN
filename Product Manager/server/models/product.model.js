const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        // minLength: [3, "Title must be at least 3 characters."]
    },
    price: {
        type: String,
        required: [true, "Price is required!"],
        // minLength: [2, "Price must be at least 2 characters. Please include currency symbol!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        // minLength: [10, "Description must be at least 10 characters."]
    }
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);