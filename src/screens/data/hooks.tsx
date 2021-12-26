
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";


export const useDataScreenHook = () => {
	let navigation = useNavigation();
	let onToOrderPress = () => {
		navigation.navigate(ROUTES.TOORDER);
	};
	return { onToOrderPress };
};
