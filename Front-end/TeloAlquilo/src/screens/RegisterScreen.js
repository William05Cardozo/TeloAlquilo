import React from "react";
import { View, TextInput, Button } from "react-native";

export default function RegisterScreen() {
    return (
    <View>
        <TextInput placeholder="Name" />
        <TextInput placeholder="Last Name" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <Button title="Sign Up" onPress={() => console.log("Account Created")} />
    </View>
    );
}