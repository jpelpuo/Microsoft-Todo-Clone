const Task = require('../../models/task');
const User = require('../../models/user');

module.exports = deleteTask = async (id, userId) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw new Error("User does not exist")
        }

        const deletedTask = await Task.findByIdAndDelete(id);

        user.createdTasks.splice(user.createdTasks.indexOf(id), 1);
        await user.save();

        return deletedTask;
    } catch (error) {
        throw error;
    }
}