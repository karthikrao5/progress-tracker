import { GoogleSignin } from 'react-native-google-signin';

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const SIGNOUT = 'SIGNOUT';

export const loginSuccess = (userInfo) => {
    return {type: LOGIN_SUCCESSFUL, user: userInfo.user}
};

export const signOut = () => {
    return async (dispatch) => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();

            dispatch({type: SIGNOUT});
        } catch (error) {
            console.error(error);
        }
    }
};