const Task = require('../models/task');
const getUser = require('./getUser')

const getTasksById = async taskIds => {
    try{
        const tasks = await Task.find({_id: {$in: taskIds}});
        return tasks.map(task => {
            return {...task._doc, createdBy: getUser.bind(this, task.createdBy)}
        })
    }catch(error){
        throw error;
    }
}

module.exports = getTasksById;