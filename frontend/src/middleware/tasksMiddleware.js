import createTask from '../services/createTask';
import getTasks from '../services/getTasks';
import actions from "../redux/actionTypes";
import { addTask } from "../redux/actions/taskActions"
import { setTaskState, updateState } from "../redux/actions/taskActions"

const tasksMiddleware = ({ dispatch }) => next => async action => {
    switch (action.type) {
        case actions.ADD_TASK:
            const newTask = await createTask(action.taskBody);
            if (newTask) {
                dispatch(updateState(newTask.data.createTask))
            }
            // console.log(action)
            return next(action);
        case actions.GET_TASKS:
            const tasks = await getTasks();
            if (tasks) {
                dispatch(setTaskState(tasks.data.getTasks))
            }
            return next(action);
        default:
            return next(action)
    }
}

export default tasksMiddleware;