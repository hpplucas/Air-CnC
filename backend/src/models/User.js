const mongoose = require('mongoose');

const UserScheema = mongoose.Schema({
    email: String
});

module.exports = mongoose.model('user', UserScheema);
