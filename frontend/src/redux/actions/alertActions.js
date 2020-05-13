import actions from '../actionTypes/index';

const successAlert = message => {
    return{
        type: actions.ALERT_SUCCESS,
        message
    }
}

const failureAlert = message => {
    return {
        type: actions.ALERT_FAILURE,
        message
    }
}

const clearAlert = () => {
    return{
        type: actions.ALERT_CLEAR
    }
}

export {
    successAlert,
    failureAlert,
    clearAlert
}