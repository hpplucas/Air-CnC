const mongoose = require('mongoose');

const BookingScheema = mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'spot'
    }
});

module.exports = mongoose.model('booking', BookingScheema);