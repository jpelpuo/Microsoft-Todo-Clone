const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    createdTasks:[
        {
            type: Schema.Types.ObjectId,
            ref:'Task'
        }
    ]
});

module.exports = model('User', userSchema)