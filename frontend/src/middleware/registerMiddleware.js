import actions from "../redux/actionTypes";
import { registerFailure, registerSuccess } from '../redux/actions/registerActions';
import register from '../services/register';
import { failureAlert, successAlert, clearAlert } from '../redux/actions/alertActions';
import history from '../helpers/history';

const registerMiddleware = ({ dispatch }) => next => async action => {
    const result = next(action);

    if (action.type === actions.REGISTER_REQUEST) {
        try {
            const registerData = await register(
                action.payload.firstName,
                action.payload.lastName,
                action.payload.email,
                action.payload.password
            );
            if (registerData.data.addUser) {
                dispatch(registerSuccess());
                dispatch(successAlert("Registration successful"));
                setTimeout(() => {
                    dispatch(clearAlert());
                    return history.push("/auth");
                }, 3000)
                return;
            }
            return dispatch(registerFailure({ errorMessage: registerData.errors[0].message }))
        } catch (error) {
            throw error;
        }
    }

    if (action.type === actions.REGISTER_FAILURE) {
        return dispatch(failureAlert(action.payload.errorMessage))
    }

    return result;
}

export default registerMiddleware;