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

    return (
    <View>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <Button title="Ingresar" onPress={() => console.log("Ingreso")} />
        <Button onPress={goToRegister} title="Register" />
        <Button onPress={goToPassword} title="Forgot Your Password?" />
    </View>
    );
}