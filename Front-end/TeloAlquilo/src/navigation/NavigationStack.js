import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen";
import PasswordScreen from "../screens/PasswordScreen";
import ProfileScreen from "../screens/ProfileScreen";
import InterfazHouseScreen from "../screens/InterfazHouseScreen";
import SelectHouseScreen from "../screens/SelectHousesScreen";

const Stack = createStackNavigator();

export default function NavigationStack() {
    return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Interfaz" component={InterfazHouseScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Password" component={PasswordScreen} />
        <Stack.Screen name="Selection" component={SelectHouseScreen} />
    </Stack.Navigator>
    );
}