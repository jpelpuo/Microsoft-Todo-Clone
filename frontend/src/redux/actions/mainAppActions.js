import actions from '../actionTypes/index';

const minimizeSideBar = () => {
    return {
        type: actions.MINIMIZE_SIDEBAR
    }
}

const maximizeSideBar = () => {
    return {
        type: actions.MAXIMIZE_SIDEBAR
    }
}

const toggleSideBar = () => {
    return  {
        type: actions.TOGGLE_SIDEBAR
    }
}

const toggleMenuDisplay = () => {
    return {
        type: actions.TOGGLE_MENU_DISPLAY
    }
}

export {
    minimizeSideBar,
    maximizeSideBar,
    toggleSideBar,
    toggleMenuDisplay
}