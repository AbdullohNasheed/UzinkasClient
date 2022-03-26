import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import DrawerPage from "../components/drawer/drawer";
import { InformationScreen } from "../screens/information";
import PersonalStack from "../screens/personal/hooks";
import OrderStack from "./OrderStack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerPage />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
          flex: 1,
          backgroundColor: '#F5FDFF',
        },
        drawerType: 'front',
      }}>
      <Drawer.Screen component={PersonalStack} name="Home" />
      <Drawer.Screen component={OrderStack} name="Screen" />
      <Drawer.Screen component={InformationScreen} name="New" />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
