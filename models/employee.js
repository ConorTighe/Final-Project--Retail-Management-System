var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    empId: {type: Number, min: 10000, max: 99999, required: true, unique : true},
    num: {type: Number, required: true},
    job: {type: String, required: true},
    storeName: {type: String, required: true},
    email: {type: String, required: true}
    },
    { collection : 'employees' });

schema.plugin(uniqueValidator);

module.exports = mongoose.model('Message', schema);