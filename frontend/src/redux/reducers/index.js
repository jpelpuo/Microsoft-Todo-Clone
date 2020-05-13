import { combineReducers } from 'redux';
import authentication from './authReducer';
import alert from './alertReducer';
import register from './registerReducer';

const reducers = combineReducers({ 
    authentication,
    alert,
    register
 });

export default reducers;