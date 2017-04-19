var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    storeName: {type: String, required: true},
    lat: {type: Number, required: false},
    long: {type: Number, required: false},
    },
    { collection : 'store' });

module.exports = mongoose.model('stores', schema);