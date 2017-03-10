var moongoose = require('mongoose');
var Schema = mongoose.Schema;
var moongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

schema.plugin(moongooseUniqueValidator);

module.exports = mongoose.model('Message', schema);