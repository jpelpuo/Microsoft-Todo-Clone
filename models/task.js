const {model, Schema} = require('mongoose');

const taskSchema = new Schema({
    taskBody: {
        type: String,
        required: false
    },
    taskCompleted:{
        type: Boolean,
        required: true
    },
    taskImportant: {
        type: Boolean,
        required: true
    }
});

module.exports = model('Task', taskSchema)