import React, {Component} from 'react';
import {Header} from 'react-native-elements';
import {TouchableOpacity} from "react-native";
import MaterialIcon from "react-native-vector-icons/FontAwesome";

export const AppHeader = (props) => {
    console.log(props);
    const options = {
        leftComponent:
            <TouchableOpacity onPress={() => {
                console.log("leftButton pressed");
            }}>
                <MaterialIcon name='angle-left' size={30} color={"#000"}/>
            </TouchableOpacity>,
        rightComponent:
            <TouchableOpacity onPress={() => {
                console.log("Signout button pressed");
                props.signOut();
            }}>
                <MaterialIcon name='sign-out' size={30} color={'#000'} />
            </TouchableOpacity>
    };

    return (
        <Header leftComponent={props.backDisabled ? null : options.leftComponent}
                centerComponent={{text: props.headerText, style: {color: '#000'}}}
                rightComponent={options.rightComponent}>

        </Header>
    )
};