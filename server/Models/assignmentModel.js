const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    user_id:String,
    title:{
        type:String,
        default:'On Board Assignment'
    }
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;