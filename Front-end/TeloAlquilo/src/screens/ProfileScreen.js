import React from "react";
import { Text, Button, SafeAreaView, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
    return (
        <SafeAreaView>
            <Image
            source={require("../../assets/IconoPhoto.png")}
            resizeMode="contain"
            style={styles.image} />
            <Button title="Configuration Profile" />
            <Text>PhotoIcon</Text>
            <Text>IconConfiguration</Text>
            <Text>My Post</Text>
            <Button title="Add Your House!" onPress={() => console.log("ADD")} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: "100%",
        marginBottom: 10,
        marginTop: 0,
        textAlign: "center"
    },
});