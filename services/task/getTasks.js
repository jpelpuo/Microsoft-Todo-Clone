const Task = require('../../models/task')

module.exports = getTasks = async () => {
    try{
        const tasks = await Task.find();
        return tasks;
    }catch(error){
        throw error;
    }
}