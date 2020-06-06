import actions from "../redux/actionTypes";
import { toggleMenuDisplay } from '../redux/actions/mainAppActions';

const mainAppMiddleware = ({ getState, dispatch }) => next => action => {
    const mainAppState = getState().mainApp;

    if (action.type === actions.TOGGLE_SIDEBAR) {
        localStorage.setItem('sideBarMinimized', !mainAppState.sideBarMinimized);
        dispatch(toggleMenuDisplay());
    }

    if (action.type === actions.TOGGLE_MENU_DISPLAY) {
        localStorage.setItem('menuDisplayed', !mainAppState.menuDisplayed);
    }
    return next(action);
}

export default mainAppMiddleware;