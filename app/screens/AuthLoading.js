import React, {Component} from 'react';
import {ActivityIndicator, StatusBar, View} from "react-native";
import {connect} from "react-redux";

class AuthLoading extends Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.loading();
    }

    loading = () => {
        this.props.navigation.navigate(this.props.user ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, null)(AuthLoading)