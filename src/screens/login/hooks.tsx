import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";

export const useLoginScreenHook = () => {
	let navigation = useNavigation();
	let onRegisterPress = () => {
		navigation.navigate(ROUTES.REGISTER);
	};
	return { onRegisterPress};
};
