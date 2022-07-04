import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export default function InterfazHouseScreen() {
    return (
    <View style={styles.container}>
      <Button title="Filters" />
            <Text>PhotosHouses</Text>
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
  });