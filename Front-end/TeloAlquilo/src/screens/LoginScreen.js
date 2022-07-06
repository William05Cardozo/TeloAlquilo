import React from "react";
import { View, Button, TextInput, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


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
    <View  style={styles.container}>
        <Image
            source={require("../../assets/HouseLogin.png")}
            resizeMode="contain"
            style={styles.image} />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
        <TouchableOpacity style={styles.Button} onPress={goToInterfaz}>
            <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <Text>Don't have an account?
            <TouchableOpacity onPress={goToRegister}>
                <Text> Register</Text>
            </TouchableOpacity> </Text>
        <TouchableOpacity onPress={goToPassword}>
            <Text>Forgot you password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToInterfaz}>
            <Text>Im Looking</Text>
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
      },
      textButton: {
        color: 'white'
      },
      image: {
        height: 200,
        width: "100%",
        marginBottom: 10,
        textAlign: "center"
      }
  });