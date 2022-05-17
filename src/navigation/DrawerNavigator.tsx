import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import DrawerPage from "../components/drawer/drawer";
import { ROUTES } from "./ROUTES";
import Tabs from "./Tab";
import { PinCodScreen } from "../screens/pincod";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerPage />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerStyle: {
          flex: 1,
          backgroundColor: 'rgba(38, 39, 50, 1)',
        },
        drawerType: 'front',
      }}>
      <Drawer.Screen name={ROUTES.HOME_TABS} component={Tabs} />
      <Drawer.Screen name={ROUTES.PINCODE} component={PinCodScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
