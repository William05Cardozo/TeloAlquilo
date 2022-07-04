import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import InterfazHouseScreen from "../screens/InterfazHouseScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Interfaz" component={InterfazHouseScreen} />
        </Drawer.Navigator>
    );
}