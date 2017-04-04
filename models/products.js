var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    productName: {type: String, required: true},
    qty: {type: Number, min: 0, required: false},
    price: {type: Number, min: 18, required: false},
    },
    { collection : 'products' });

module.exports = mongoose.model('Products', schema);