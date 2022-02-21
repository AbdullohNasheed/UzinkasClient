import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { PropsWithChildren } from "react";
import {
	Image,
	Platform,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeIcon } from "../assets/icons/icons";
import { CancelScreen } from "../screens/ cancel";
import { ChoosingScreen } from "../screens/choosing";
import { DataScreen } from "../screens/data";
import { InformationScreen } from "../screens/information";
import { PersonalScreen } from "../screens/personal";
import PersonalStack from "../screens/personal/hooks";
import { ToOrderScreen } from "../screens/toOrder";
import { VisitHistoryScreen } from "../screens/visitHistory";
import HomeStack from "./HomeStack";

const img1 = require("../assets/image/Home.png");
const img2 = require("../assets/image/Note.png");
const img3 = require("../assets/image/user.png");

const Tab = createBottomTabNavigator();
interface CustomTabBarBottonProps {
	onPress: any;
}

const CustomTabBarBotton = ({
	children,
	onPress,
}: PropsWithChildren<CustomTabBarBottonProps>) => (
	<TouchableOpacity
		style={{
			top: Platform.OS==='android' ? -35 : -15,
			justifyContent: "center",
			alignItems: "center",
			...styles.shadow,
		}}
		onPress={onPress}
	>
		<View
			style={{
				width: Platform.OS==="android" ? 80 : 93,
				height: Platform.OS==="android" ? 80 : 93,
				borderRadius: 80,
				backgroundColor: "rgba(0, 152, 153, 1)",
				elevation: 5,
				shadowColor: 'rgba(0, 152, 153, 1)',
				shadowRadius: 20,
				shadowOpacity: 0.3,
			}}
		>
			{children}
		</View>
	</TouchableOpacity>
);

const Tabs = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#181926" }}>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
						position: "absolute",
						height: 70,
						borderTopLeftRadius: 30,
						borderTopRightRadius: 30,
						backgroundColor: "#181926",
						borderTopWidth: 0,
					},
				}}
			>
				<Tab.Screen
					name="Home"
					component={PersonalStack}
					options={{
						tabBarIcon: ({ focused }) => (
							<View
								style={{
									alignItems: "center",
									justifyContent: "center",
									top: Platform.OS === "android" ? 0 : 25,
								}}
							>
								<Image
									source={img1}
									resizeMode="contain"
									style={{
										width: 40,
										height: 40,
										tintColor: focused
											? "rgba(0, 152, 153, 1)"
											: "rgba(182, 182, 182, 1)",
									}}
								/>
							</View>
						),
						tabBarShowLabel: false,
					}}
				/>

				<Tab.Screen
					name="Screen"
					component={ToOrderScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<Image
								source={img2}
								resizeMode="contain"
								style={{
									width: 40,
									height: 40,
									tintColor: focused ? "#fff" : "#000",
								}}
							/>
						),
						tabBarButton: (props) => (
							<CustomTabBarBotton {...props} />
						),
						tabBarShowLabel: false,
					}}
				/>

				<Tab.Screen
					name="New"
					component={InformationScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<View
								style={{
									alignItems: "center",
									justifyContent: "center",
									
								}}
							>
								<Image
									source={img3}
									resizeMode="contain"
									style={{
										width: 40,
										height: 40,
										tintColor: focused
											? "rgba(0, 152, 153, 1)"
											: "rgba(182, 182, 182, 1)",
											top: Platform.OS === "android" ? 0 : 25,
									}}
								/>
							</View>
						),
						tabBarShowLabel: false,
					}}
				/>
			</Tab.Navigator>
		</SafeAreaView>
	);
};
export default Tabs;

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "rgba(0, 152, 153, 1)",
		shadowRadius: 10,
		shadowOpacity: 0.4,
	},
});
