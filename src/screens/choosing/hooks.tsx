import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";

export const useChoosingScreenHook = () => {
	let navigation = useNavigation();
	let onLoginPress = () => {
		navigation.navigate(ROUTES.LOGIN);
	};
	let onContractPress = () => {
		navigation.navigate(ROUTES.APPLICATION);
	};
	return { onLoginPress, onContractPress };
};
