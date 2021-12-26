import { useNavigation } from "@react-navigation/core";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../../navigation/ROUTES";
import { InformationScreen } from "../information";
import { HomeScreen } from "../home"; 
import { PersonalScreen } from ".";
import { NotifictionScreen } from "../ notifications";
import { CancelScreen } from "../ cancel";
import { DataScreen } from "../data";
import { ToOrderScreen } from "../toOrder";
import { OrderAccordingScreen } from "../orderAccording";
import { AdditionalScreen } from "../additional";
import { QrKodScreen } from "../qrKod";
export const usePersonalScreenHook = () => {
	let navigation = useNavigation();
	let onInfarmationPress = () => {
		navigation.navigate(ROUTES.INFARMATION);
	};
    let onNotificationPress = () => {
		navigation.navigate(ROUTES.NOTIFICATION);
	};
    let onCancelonPress = () => {
		navigation.navigate(ROUTES.CANCEL);
	};
	return { onInfarmationPress, onNotificationPress, onCancelonPress };
};

let Stack = createNativeStackNavigator();

export default function PersonalStack() {
	return (
		<Stack.Navigator screenOptions={{
            headerShown: false
        }}>
			<Stack.Screen name={ROUTES.HOME_TABS} component={PersonalScreen} />
			<Stack.Screen
				name={ROUTES.INFARMATION}
				component={InformationScreen}
			/>
            <Stack.Screen
				name={ROUTES.NOTIFICATION}
				component={NotifictionScreen}
			/>
             <Stack.Screen
				name={ROUTES.CANCEL}
				component={CancelScreen}
			/>
			 <Stack.Screen
				name={ROUTES.DATA}
				component={DataScreen}
			/>
			 <Stack.Screen
				name={ROUTES.TOORDER}
				component={ToOrderScreen}
			/>
			 <Stack.Screen
				name={ROUTES.TOORDER2}
				component={OrderAccordingScreen}
			/>
			 <Stack.Screen
				name={ROUTES.ADDITIONAL}
				component={AdditionalScreen}
			/>

		</Stack.Navigator>
	);
}
