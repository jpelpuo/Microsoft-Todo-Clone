import actions from "../actionTypes";

const initialState = {
    token: "",
    userId: "",
    firstName: "",
    lastName: "",
    error: false
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOGIN:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default authReducer;