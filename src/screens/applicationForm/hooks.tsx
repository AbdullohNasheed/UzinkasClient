import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";

export const useContractScreenHook = () => {
	let navigation = useNavigation();
	let onApplecationPress = () => {
		navigation.navigate(ROUTES.APPLICATION);
	};

	return { onApplecationPress };
};