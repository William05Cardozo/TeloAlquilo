import React from "react";
import { Text, Button, SafeAreaView } from "react-native";

export default function ProfileScreen() {
    return (
        <SafeAreaView>
            <Button title="Configuration Profile" />
            <Text>PhotoIcon</Text>
            <Text>IconConfiguration</Text>
            <Text>My Post</Text>
            <Button title="Add Your House!" onPress={() => console.log("ADD")} />
        </SafeAreaView>
    );
}