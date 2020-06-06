import actions from '../actionTypes/index';

const initialState = {
    addingTask : false,
    taskInputValueChanged: false,
    taskInputValueValid: false,
    tasks: [],
    newTask: []
}

const task = (state = initialState, action) => {
    switch(action.type){
        case actions.ADDING_TASK:
            return {
                ...state,
                addingTask: true
            }
        case actions.SET_TASKS_STATE:
            return {
                ...state,
                tasks: [...action.tasks, ...state.tasks].reverse()
            }
        case actions.UPDATE_STATE:
            return {
                ...state,
                tasks: [action.task, ...state.tasks]
            }
        case actions.CLEAR_ADDING_STATE:
            return {
                ...state,
                addingTask: false
            }
        case actions.TASK_INPUT_VALUE_CHANGED:
            return {
                ...state,
                taskInputValueChanged: true,
                taskInputValueValid: action.taskInputValueValid
            }
        default:
            return state
    }
}

export default task;