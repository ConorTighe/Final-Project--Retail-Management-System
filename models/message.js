var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    empId: {type: String, required: true},
    num: {type: String, required: true},
    job: {type: String, required: true},
});

module.exports = mongoose.model('Message', schema);