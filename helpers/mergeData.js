const getUser = require('./getUser');

const formatTaskData = task => {
    return {...task._doc, createdBy: getUser.bind(this, task.createdBy)}
}

module.exports = formatTaskData;