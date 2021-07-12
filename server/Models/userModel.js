const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        name: String,
        username: String,
        usertype: { type: String, default: 'Instructor' },
        password:{type: String, default:'123Test'},
        email:String
})

const User = mongoose.model('User', userSchema);

module.exports = User;