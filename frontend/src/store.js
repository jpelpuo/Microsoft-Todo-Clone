import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './redux/reducers/index';
import authMiddleware from './middleware/authMiddleware';
import loggerMiddleware from './middleware/loggerMiddleware';
import registerMiddleware from './middleware/registerMiddleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainAppMiddleware from './middleware/mainAppMiddleware';
import tasksMiddleware from './middleware/tasksMiddleware'

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(
            loggerMiddleware,
            mainAppMiddleware,
            tasksMiddleware
        ))
);

export default store;