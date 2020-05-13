import actions from '../actionTypes/index';

const initialState = {
    registered: false,
    registering: false,
    error: true,
    errorMessage: ""
}

const register = (state = initialState, action) => {
    switch(action.type){
        case actions.REGISTER_REQUEST:
            return{
                ...state,
                registering: true
            }
        case actions.REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                registered: true
            }
        case actions.REGISTER_FAILURE:
            return{
                ...state,
                error: true,
                errorMessage: action.payload,
                registering: false
            }
        default:
            return state
    }
}

export default register;