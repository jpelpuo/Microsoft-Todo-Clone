const Task = require('../../models/task');

module.exports = updateTask = async (id, taskBody, taskCompleted) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, { taskBody: taskBody, taskCompleted: taskCompleted });
        return updatedTask
    } catch (error) {
        throw error;
    }
}