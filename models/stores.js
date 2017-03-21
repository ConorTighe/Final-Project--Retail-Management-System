var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    storeName: {type: String, required: true},
    lat: {type: String, required: false},
    long: {type: String, required: false},
});

module.exports = mongoose.model('Stores', schema);