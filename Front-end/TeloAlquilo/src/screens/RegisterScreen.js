import React from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RegisterScreen(props) {
    const { navigation } = props;

    const goToProfile = () => {
        navigation.navigate("Profile");
    };
     return (
     <View style={styles.container}>
        <TextInput style={styles.inputStyle} placeholder=" Name" />
        <TextInput style={styles.inputStyle} placeholder=" Last Name" />
        <TextInput style={styles.inputStyle} placeholder=" Email" />
        <TextInput style={styles.inputStyle} secureTextEntry={true} password={true} placeholder=" Password" />
        <TextInput style={styles.inputStyle} secureTextEntry={true} password={true} placeholder=" Confirm password" />
        <TouchableOpacity style={styles.Button} onPress={goToProfile}>
            <Text style={styles.textStyle}>Sign Up</Text>
        </TouchableOpacity>
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
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 4,
        marginBottom: 4,
      },
      textStyle: {
        color: '#fff',
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