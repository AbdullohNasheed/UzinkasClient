import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {PropsWithChildren} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {InformationScreen} from '../screens/information';
import {MyOrdersScreen} from '../screens/myOrders';
import PersonalStack from '../screens/personal/hooks';
import {QrKodOneScreen} from '../screens/qrKodOne.tsx';
import {ToOrderScreen} from '../screens/toOrder';
const img1 = require('../assets/image/Home.png');
const img2 = require('../assets/image/Note.png');
const img3 = require('../assets/image/user.png');
const img4 = require('../assets/image/PancelBorder.png');

const Tab = createBottomTabNavigator();
interface CustomTabBarBottonProps {
  onPress: any;
}

const CustomTabBarBotton = ({
  children,
  onPress,
}: PropsWithChildren<CustomTabBarBottonProps>) => (
  <TouchableOpacity onPress={onPress}></TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: '#181926',
          borderTopWidth: 0,
          paddingHorizontal: 15,
          height: 80,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={PersonalStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: Platform.OS === 'android' ? 0 : 20,
              }}>
              <Image
                source={img1}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused
                    ? 'rgba(0, 152, 153, 1)'
                    : 'rgba(182, 182, 182, 1)',
                }}
              />
              <Text style={{color: '#98989b', fontSize: 15, marginTop: 3}}>
                Главная
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="order"
        component={MyOrdersScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: Platform.OS === 'android' ? 0 : 20,
              }}>
              <Image
                source={img2}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused
                    ? 'rgba(0, 152, 153, 1)'
                    : 'rgba(182, 182, 182, 1)',
                }}
              />
              <Text style={{color: '#98989b', fontSize: 15, marginTop: 3}}>
                Заказы
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="MyOrder"
        component={ToOrderScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: Platform.OS === 'android' ? 0 : 20,
              }}>
              <Image
                source={img4}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused
                    ? 'rgba(0, 152, 153, 1)'
                    : 'rgba(182, 182, 182, 1)',
                }}
              />
              <Text style={{color: '#98989b', fontSize: 15, marginTop: 3}}>
                Заказать
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Newww"
        component={InformationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: Platform.OS === 'android' ? 0 : 20,
              }}>
              <Image
                source={img3}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused
                    ? 'rgba(0, 152, 153, 1)'
                    : 'rgba(182, 182, 182, 1)',
                }}
              />
              <Text style={{color: '#98989b', fontSize: 15, marginTop: 3}}>
                Профиль
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'rgba(0, 152, 153, 1)',
    shadowRadius: 10,
    shadowOpacity: 0.4,
  },
});
