import actions from '../actionTypes/index';

const alert = (state = {}, action) => {
    switch(action.type){
        case actions.ALERT_SUCCESS:
            return{
                type: "alert-success",
                message: action.message
            }
        case actions.ALERT_FAILURE:
            return{
                type: "alert-failure",
                message: action.message
            }
        default:
            return{
                type: "clear"
            }
    }
}

export default alert;