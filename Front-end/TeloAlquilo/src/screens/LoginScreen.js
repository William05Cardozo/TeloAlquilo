import React from "react";
import { View, Button, TextInput, StyleSheet, Image } from "react-native";
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
        source={{ uri: 'assets:/House.png' }}
        style={{ width: 400, height: 40 }} />
        <TextInput placeholder="Email" />
         <Icon
         name="user"
         color="#000"
         size={15} />
        <TextInput placeholder="Password" />
        <Icon
        name="lock"
        color="#000"
        size={15} />
        <Button onPress={goToInterfaz} title="Login" />
        <Button onPress={goToRegister} title="Register" />
        <Button onPress={goToPassword} title="Forgot Your Password?" />
        <Button onPress={goToSelection} title="SelectionHouse" />
        <Button onPress={goToInterfaz} title="Im Looking" />
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
  });