const Task = require('../../models/task');

module.exports = updateTask = async (id, taskBody, taskCompleted) => {
    try {
        let completedTask;
        if (!taskBody) {
            completedTask = await Task.findByIdAndUpdate(id, { taskCompleted: taskCompleted });
            return completedTask;
        }
        completedTask = await Task.findByIdAndUpdate(id, { taskBody: taskBody });
        return completedTask
    } catch (error) {
        throw error;
    }
}