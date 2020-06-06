const loggerMiddleware = (store) => next => action => {
    console.log(action.type, "dispatched");
    console.log(action)
    return next(action);
}

export default loggerMiddleware;