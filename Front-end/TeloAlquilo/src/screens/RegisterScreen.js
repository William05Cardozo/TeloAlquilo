import React from "react";
import { View, TextInput, Button } from "react-native";

export default function RegisterScreen(props) {
    const { navigation } = props;

    const goToProfile = () => {
        navigation.navigate("Profile");
    }

    return (
    <View>
        <TextInput placeholder="Name" />
        <TextInput placeholder="Last Name" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <TextInput placeholder="Confirm password" />
        <Button onPress={goToProfile} title="Sign Up" />
    </View>
    );
}