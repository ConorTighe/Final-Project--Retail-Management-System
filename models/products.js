var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    productName: {type: String, required: true},
    qty: {type: Number, min: 0, required: true},
    price: {type: Number, min: 0, required: true},
    },
    { collection : 'products' });

module.exports = mongoose.model('Products', schema);