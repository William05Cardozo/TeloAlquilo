import React from "react";
import {TextInput, Button, View} from "react-native";

export default function LoginForm() {
    return(
        <View>
        <TextInput placerholder="Email" />
        <TextInput placerholder="Password" />
        <Button title="Ingresar" onPress={() => console.log("Enviado")} />
        </View>
    );
}