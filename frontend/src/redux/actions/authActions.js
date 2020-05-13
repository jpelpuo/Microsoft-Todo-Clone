import actions from '../actionTypes/index'

const loginRequest = payload => {
    return {
        type: actions.LOGIN_REQUEST,
        payload
    }
}

const loginSuccess = () => {
    return {
        type: actions.LOGIN_SUCCESS
    }
}

const loginFailure = payload => {
    return {
        type: actions.LOGIN_FAILURE,
        payload
    }
}

const setAuthState = payload => {
    return {
        type: actions.SET_STATE,
        payload
    }
}

const logout = () => {
    return {
        type: actions.LOGOUT
    }
}

export {
    loginRequest,
    loginSuccess,
    loginFailure,
    setAuthState,
    logout
};