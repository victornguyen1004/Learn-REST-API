const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    GearId: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Price: {
        type: String,
        required: true,
    },
    Quantity: {
        type: String,
        required: false,
    },
    Rating: {
        type: [String],
        required:false,
    },
    Brand: {
        type: [String],
        required: true
    },
    Image:{
        type: String
    }
})

module.exports = mongoose.model("Product",productSchema)