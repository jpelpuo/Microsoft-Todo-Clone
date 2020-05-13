import actions from '../actionTypes/index';

const registerRequest = payload => {
    return {
        type: actions.REGISTER_REQUEST,
        payload
    }
}

const registerSuccess = () => {
    return {
        type: actions.REGISTER_SUCCESS
    }
}

const registerFailure = payload => {
    return {
        type: actions.REGISTER_FAILURE,
        payload
    }
}

export {
    registerRequest,
    registerSuccess,
    registerFailure
}