const loggerMiddleware = (store) => next => action => {
    console.log(action.type + " dispatched");
    return next(action);
}

export default loggerMiddleware;