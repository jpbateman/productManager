const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            "Please enter a title!"
        ],
        minlength: [
            3,
            "Please enter a name of at least 3 characters."
        ]
    },
    price: {
        type: Number,
        required: [
            true,
            "Please enter a price"
        ]
    },
    url: {
        type: String,
        required: [
            true,
            "Please enter an image address!"
        ],
        minlength: [
            3,
            "Please enter a valid url"
        ]
    }
}, {timestamps: true});

mongoose.model('Product', ProductSchema);
