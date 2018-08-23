import {LOGIN_SUCCESSFUL, SIGNOUT} from "./actions";

const initialState = {
    user: null
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
            console.log("login success reducer with action: ", action);
            console.log("state: ", state);
            return {...state, user: action.user};
        case SIGNOUT:
            console.log("removing user from redux state");
            return {...state, user: null};
        default:
            return state
    }
};