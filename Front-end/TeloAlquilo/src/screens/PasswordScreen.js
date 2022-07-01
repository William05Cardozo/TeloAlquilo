import React from "react";
import { View, TextInput, Button } from "react-native";

export default function PasswordScreen(props) {
    const { navigation } = props;

    const goToLogin = () => {
        navigation.navigate("Login");
    }
    return (
    <View>
        <TextInput placeholder="Write your email" />
        <Button onPress={goToLogin} title="Send" />
    </View>
    );
}