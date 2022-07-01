import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="MyProfile" component={ProfileScreen} />
        </Drawer.Navigator>
    )
}