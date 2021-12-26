import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";


export const useApplecationScreenHook = () => {
	let navigation = useNavigation();
	let onApplecationFromPress = () => {
		navigation.navigate(ROUTES.APPLICATION_FORM);
	};
    let onLoginPress = () => {
		navigation.navigate(ROUTES.LOGIN);
	};

	return { onApplecationFromPress, onLoginPress };
};
