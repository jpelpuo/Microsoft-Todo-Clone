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
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = model('Task', taskSchema)