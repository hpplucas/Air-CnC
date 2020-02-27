const mongoose = require('mongoose');

const SpotScheema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
}, {
    toJSON: {
        virtuals: true
    }
});

SpotScheema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}`;
});
module.exports = mongoose.model('spot',SpotScheema);