const User = require('../models/user');
const getTasksById = require('./getTaskById')

const getUser = async id => {
    try{
        const user = await User.findById(id);
        return {...user._doc, password: null, createdTasks: getTasksById.bind(this, user._doc.createdTasks)}
    }catch(error){
        throw error;
    }
}

module.exports = getUser;