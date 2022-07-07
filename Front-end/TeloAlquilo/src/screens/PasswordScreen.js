import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function PasswordScreen(props) {
    const { navigation } = props;

    const goToLogin = () => {
        navigation.navigate("Login");
    }
    return (
    <View style={styles.container}>
        <Image
        source={require("../../assets/Password.png")}
        resizeMode="contain"
        style={styles.image} />        
        <TextInput style={styles.inputStyle} placeholder="Write your email" />
        <TouchableOpacity style={styles.Button} onPress={goToLogin}>
            <Text>Send</Text>
        </TouchableOpacity>
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
        marginTop: 4,
        marginBottom: 4,
       
    },
    image: {
        height: 200,
        width: "100%",
        marginBottom: 10,
        textAlign: "center"
      },
      inputStyle: {
        borderWidth: 2,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 4,
        marginBottom: 4,
      },
});