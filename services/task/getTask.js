const Task = require('../../models/task');

module.exports = getTask = async id => {
    try{
        const task = await Task.findById(id);
        return task;
    }catch(error){
        throw error;
    }
}