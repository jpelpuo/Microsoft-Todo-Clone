const Task = require('../../models/task');
const User = require('../../models/user');


module.exports = createTask = async ({taskBody, taskCompleted, createdBy}) => {
    try{
        const task = new Task({taskBody, taskCompleted, createdBy});
        const newTask = await task.save();

        const user = User.findById(createdBy);

        if(!user){
            throw new Error("User not found");
        }

        user.createdTasks.push(task);
        await user.save();
        return newTask;

    }catch(error){
        throw error
    }
}