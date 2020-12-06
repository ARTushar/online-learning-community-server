const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = Schema({
    request: {
        type: Schema.Types.ObjectId,
        ref: 'Request',
    },
    rating: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    description: {
        type: String,
        trim: true
    },
}, {
    timestamps: true
});


module.exports = reviewSchema;