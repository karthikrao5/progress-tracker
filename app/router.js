import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Home from './screens/Home';
import Login from "./screens/Login";
import AuthLoading from "./screens/AuthLoading";
import createMaterialBottomTabNavigator from "react-navigation-material-bottom-tabs/dist/navigators/createMaterialBottomTabNavigator";

const AppStack = createMaterialBottomTabNavigator({
    Home: { screen: Home }
}, {
    initialRouteName: 'Home',
    activeTintColor: '#f4b942',
    inactiveTintColor: '#eae1ce',
    barStyle: {backgroundColor: '#f4b942'}
});

const AuthStack = createStackNavigator({
    Login: {screen: Login,  navigationOptions: {header: null}}
});

export default createSwitchNavigator({
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack
}, {
    initialRouteName: 'AuthLoading'
});