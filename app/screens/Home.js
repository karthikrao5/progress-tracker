import React, {Component} from 'react';
import {Text, View} from "react-native";
import {AppHeader} from "../components/Header/header";
import {connect} from "react-redux";
import {signOut} from "../redux/actions";

class Home extends Component {

    static navigationOptions = {
        header: props => <AppHeader {...props} backDisabled={true} headerText="Progress Tracker"/>
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Home screen!</Text>
                <Text>Welcome {this.props.user.givenName}</Text>
            </View>
        )
    }
}

mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

mapDispatchToProps = (dispatch) => {
    return ({
        signOut: dispatch(signOut())
    })
};

export default connect(mapStateToProps, null)(Home);