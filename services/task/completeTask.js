const Task = require('../../models/task');

module.exports = completeTask = async (id) => {
    try{
        const completedTask = await Task.findByIdAndUpdate(id, {taskCompleted:true});
        return completedTask;
    }catch(error){
        throw error;
    }
}