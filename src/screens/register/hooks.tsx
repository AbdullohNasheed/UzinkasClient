import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";

export const usePincodScreenHook = () => {
	let navigation = useNavigation();
	let onPinCodPress = () => {
		navigation.navigate(ROUTES.PINCODE);
	};
	return { onPinCodPress };
};
