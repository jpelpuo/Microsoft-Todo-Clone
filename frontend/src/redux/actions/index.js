import actions from '../actionTypes/index'

const login = payload => {
    return {
        type: actions.LOGIN,
        payload
    }
}

export default login;