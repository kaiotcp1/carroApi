const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    model: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 20,
    },

    brand: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 30
    },

    type: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 20

    },

    available: {
        type: Boolean,
        required: true,
    },
    

}, {timestamps: true})

module.exports = mongoose.model('Car', carSchema);