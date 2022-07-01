import React from "react";
import { View, Button, TextInput } from "react-native";

export default function LoginScreen(props) {
    const { navigation } = props;

    const goToRegister = () => {
        navigation.navigate("Register");
    };

    const goToPassword = () => {
        navigation.navigate("Password")
    };
    
    const goToInterfaz = () => {
        navigation.navigate("Interfaz");
    };

    const goToSelection = () => {
        navigation.navigate("Selection");
    };

    return (
    <View>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <Button onPress={goToInterfaz} title="Login" />
        <Button onPress={goToRegister} title="Register" />
        <Button onPress={goToPassword} title="Forgot Your Password?" />
        <Button onPress={goToSelection} title="SelectionHouse" />
    </View>
    );
}