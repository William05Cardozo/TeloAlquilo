import React from "react";
import { View, Text, Button } from "react-native";

export default function LoginScreen(props) {
    const { Navigation } = props;

    const goToRegister = () => {
        navigation.navigate("Register");
    };

    return (
    <View>
        <Text>LoginScreen</Text>
        <Text>LoginScreen</Text>
        <Text>LoginScreen</Text>
        <Text>LoginScreen</Text>
        <Button onPress={goToRegister} title="Register" />
    </View>
    );
}