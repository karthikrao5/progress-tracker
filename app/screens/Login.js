import React, {Component} from 'react';
import {Text, View, StyleSheet} from "react-native";
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import {connect} from "react-redux";
import {loginSuccess} from "../redux/actions";

class Login extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        GoogleSignin.configure({
            iosClientId: "1085343668601-1sm6q93pb9om6aqs5g1i9pc05oiajbdj.apps.googleusercontent.com", // only for iOS
        });
    }

    signIn = async () => {
        console.log("attempting to login...");
        try {
            const userInfo = await GoogleSignin.signIn();
            this.props.loginSuccess(userInfo);
            this.props.navigation.navigate('Home');
        } catch (error) {
            console.log(error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
        console.log("finished signin");
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Login screen!</Text>
                <GoogleSigninButton
                    style={{ width: 48, height: 48 }}
                    size={GoogleSigninButton.Size.Standard}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.signIn}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

mapDispatchToProps = (dispatch) => {
    return({
        loginSuccess: (userInfo) => dispatch(loginSuccess(userInfo))
    });
};

export default connect(null, mapDispatchToProps)(Login);