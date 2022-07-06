import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "../screens/ProfileScreen";
import InterfazHouseScreen from "../screens/InterfazHouseScreen";
import { SafeAreaView } from "react-native";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
    return (
            <Tab.Navigator>
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
    );
}