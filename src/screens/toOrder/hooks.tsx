import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";
export const usesOrderScreenHook = () => {
	let navigation = useNavigation();
	let onOrderPress = () => {
		navigation.navigate(ROUTES.TOORDER2);
	};
    let onAdditionalPress = () => {
		navigation.navigate(ROUTES.ADDITIONAL);
	};
	return { onOrderPress,onAdditionalPress };
};