import actions from '../actionTypes/index';

const getTasks = () => {
    return {
        type: actions.GET_TASKS
    }
}

const addingTask = () => {
    return {
        type: actions.ADDING_TASK
    }
}

const clearAddingTask = () => {
    return {
        type: actions.CLEAR_ADDING_STATE
    }
}

const taskInputValueChanged = taskInputValueValid => {
    return {
        type: actions.TASK_INPUT_VALUE_CHANGED,
        taskInputValueValid
    }
}

const addTask = taskBody => {
    return {
        type: actions.ADD_TASK,
        taskBody
    }
}

const setTaskState = tasks => {
    return {
        type: actions.SET_TASKS_STATE,
        tasks
    }
}

const updateState = task => {
    return {
        type: actions.UPDATE_STATE,
        task
    }
}

export {
    addingTask,
    clearAddingTask,
    taskInputValueChanged,
    addTask,
    setTaskState,
    getTasks,
    updateState
}