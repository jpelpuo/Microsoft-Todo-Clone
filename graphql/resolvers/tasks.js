const getTask = require('../../services/task/getTask');
const getTasks = require('../../services/task/getTasks');
const completeTask = require('../../services/task/completeTask');
const createTask = require('../../services/task/createTask');
const updateTask = require('../../services/task/updateTask');
const deleteTask = require('../../services/task/deleteTask');
const formatTaskData = require('../../helpers/mergeData')

module.exports = {
    getTask: async ({ id }) => {
        try {
            const task = await getTask(id);
            return formatTaskData(task);
        } catch (error) {
            throw error
        }
    },
    getTasks: async () => {
        try {
            const tasks = await getTasks();
            return tasks.map(task => {
                return formatTaskData(task)
            })
        } catch (error) {
            throw error
        }
    },
    deleteTask: async ({ id }) => {
        try {
            const deletedTask = deletedTask(id);
            return formatTaskData(deletedTask)
        } catch (error) {
            throw error;
        }
    },
    completeTask: async ({ id }, userId) => {
        try {
            const completedTask = await completeTask(id);
            return formatTaskData(completedTask);
        } catch (error) {
            throw error;
        }
    },
    createTask: async (args, request) => {
        try {
            const newTask = await createTask({
                taskBody: args.taskInput.taskBody,
                taskCompleted: args.taskInput.taskCompleted,
                createdBy: request.userId
            });

            return formatTaskData(newTask);

        } catch (error) {
            throw error
        }
    },
    updateTask: async (args, request) => {
        try{
            const updatedTask = await updateTask({
                _id: args.updateInput.id,
                taskBody: args.updateInput.taskBody,
                taskCompleted: args.updateInput.taskCompleted
            })
            return formatTaskData(updatedTask)
        }catch(error){
            throw error;
        }
    },
    deleteTask: async id => {
        try{
            const deletedTask = await deleteTask(id);
            return formatTaskData(deletedTask);
        }catch(error){
            throw error;
        }
    }
}