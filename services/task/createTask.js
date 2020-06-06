const Task = require('../../models/task');
const User = require('../../models/user');


module.exports = createTask = async ({ taskBody, taskCompleted, taskImportant }) => {
    try {
        const task = new Task({ taskBody, taskCompleted, taskImportant });
        const newTask = await task.save();

        return newTask;

    } catch (error) {
        throw error
    }
}