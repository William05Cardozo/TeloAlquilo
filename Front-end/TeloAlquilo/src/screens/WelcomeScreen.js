import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";


export default function WelcomeScrenn(props) {
    const { navigation } = props;

    const goToInterfaz = () => {
        navigation.navigate("Interfaz");
    };

    const goToLogin = () => {
        navigation.navigate("Login");
    };
    return (
        <View style={styles.container}>
            <Image
            source={require("../../assets/House.png")}
            resizeMode="contain"
            style={styles.image} />
            <Text style={styles.textStyle}>Bienvenido a TeloAlquilo, tu app de arriendo o compra de casa.</Text>
            <Text>Que deseas hacer?</Text>
            <TouchableOpacity onPress={goToInterfaz}>
                <Text>MIRAR CASAS</Text></TouchableOpacity>
            <TouchableOpacity onPress={goToLogin}>
                <Text>Publicar Casa</Text></TouchableOpacity>
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
    image: {
        height: 200,
        width: "100%",
        marginBottom: 10,
        textAlign: "center"
      },
      textStyle: {
        marginTop: 10,
      },
  });