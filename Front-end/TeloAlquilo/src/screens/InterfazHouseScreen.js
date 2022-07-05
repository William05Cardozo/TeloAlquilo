import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView } from "react-native";
import NavigationTab from "../navigation/NavigationTab";

export default function InterfazHouseScreen() {
  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.Button} onPress={() => console.log("ADD")}>
          <Text style={styles.ButtonText}>Filters!</Text>
        </TouchableOpacity>
        <Text style={styles.TextStyle}>PhotosHouses</Text>
        <Text>Search By Map</Text>
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
    TextStyle: {
      color: 'red',
    },
    Button: {
      backgroundColor: 'black',
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    ButtonText: {
      color: 'red',
    }
  });