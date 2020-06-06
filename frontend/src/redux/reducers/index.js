import { combineReducers } from 'redux';
import authentication from './authReducer';
import alert from './alertReducer';
import register from './registerReducer';
import mainApp from './appReducer';
import task from './taskReducer';

const reducers = combineReducers({ 
    authentication,
    alert,
    register,
    mainApp,
    task
 });

export default reducers;