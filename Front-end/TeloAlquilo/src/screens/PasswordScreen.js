import React from "react";
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function PasswordScreen(props) {
    const { navigation } = props;

    const goToLogin = () => {
        navigation.navigate("Login");
    }
    return (
    <View style={styles.container}>
        <TextInput placeholder="Write your email" />
        <Button onPress={goToLogin} title="Send" />
        <Text>You have account?
            <TouchableOpacity onPress={() => console.log("ADD")}>
                <Text> Sign Up</Text>
            </TouchableOpacity>
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Button: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});