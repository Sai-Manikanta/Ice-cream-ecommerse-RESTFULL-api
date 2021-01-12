const mongoose = require('mongoose');

const iceCreameSchema = new mongoose.Schema({
    name: String,
    flavor: String,
    color: String,
    ingredients: Array,
    images: Array,
    price: Number,
    rating: String,
});

const IceCreame = mongoose.model('IceCreame', iceCreameSchema);

module.exports = IceCreame;