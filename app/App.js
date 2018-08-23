import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Router from './router';
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from "react-redux";
import {store, persistor} from './redux/store'

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<ActivityIndicator/>} persistor={persistor}>
                    <View style={{flex: 1}}>
                        <Router/>
                    </View>
                </PersistGate>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
