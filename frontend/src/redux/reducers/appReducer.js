import actions from '../actionTypes/index';

const initialState = {
    sideBarMinimized: localStorage.getItem('sideBarMinimized') === 'true' || false,
    menuDisplayed: localStorage.getItem('menuDisplayed') === 'true' || true
}

const mainApp = (state = initialState, action) => {
    switch (action.type) {
        case actions.MINIMIZE_SIDEBAR:
            return {
                ...state,
                sideBarMinimized: true
            }
        case actions.MAXIMIZE_SIDEBAR:
            return {
                ...state,
                sideBarMinimized: false
            }
        case actions.TOGGLE_SIDEBAR:
            return{
                ...state,
                sideBarMinimized: !state.sideBarMinimized
            }
        case actions.TOGGLE_MENU_DISPLAY:
            return{
                ...state,
                menuDisplayed: !state.menuDisplayed
            }
        default:
            return state
    }
}

export default mainApp;