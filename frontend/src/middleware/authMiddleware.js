import actions from "../redux/actionTypes";
import login from "../services/auth";
import { setAuthState, loginSuccess, loginFailure } from "../redux/actions/authActions";
import { failureAlert } from '../redux/actions/alertActions';
import history from '../helpers/history';

const loginMiddleware = ({ dispatch }) => next => async action => {
    const result = next(action);

    if (action.type === actions.LOGIN_REQUEST) {
        try {
            const loginData = await login(action.payload.email, action.payload.password);
            if (loginData.data) {
                const { token, userId, firstName, lastName, tokenExpiration } = loginData.data.login;
                history.push("/register");
                localStorage.setItem('user', JSON.stringify(loginData.data.login));
                dispatch(loginSuccess());

                return dispatch(setAuthState({ token, firstName, lastName, tokenExpiration, userId }));
            }

            return dispatch(loginFailure({ errorMessage: loginData.errors[0].message }));
        } catch (error) {
            throw error;
        }
    }

    if (action.type === actions.LOGIN_FAILURE) {
        return dispatch(failureAlert(action.payload.errorMessage))
    }
    return result;
}

export default loginMiddleware;