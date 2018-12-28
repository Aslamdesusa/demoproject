var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    Date: {type: Date, default: Date.now}
});

const user = mongoose.model('user', userSchema)

module.exports = user;