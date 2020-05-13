import actions from "../actionTypes";

const initialState = {
    token: "",
    userId: "",
    firstName: "",
    lastName: "",
    error: false,
    loggedIn: false,
    loggingIn: false,
    errorMessage: ""
}

function authentication(state = initialState, action) {
    switch (action.type) {
        case actions.LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true
            }
        case actions.LOGIN_SUCCESS:
            return{
                ...state,
                loggedIn: true,
                error: false,
                loggingIn: false
            }
        case actions.LOGIN_FAILURE:
            return {
                ...state,
                ...action.payload,
                error: true,
                loggedIn: false,
                loggingIn: false
            }
        case actions.SET_STATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default authentication;