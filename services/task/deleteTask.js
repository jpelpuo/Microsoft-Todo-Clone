const Task = require('../../models/task');

module.exports = deleteTask = async id =>{
    try{
        const deletedTask = await Task.findByIdAndDelete(id);
        return deletedTask;
    }catch(error){
        throw error;
    }
}