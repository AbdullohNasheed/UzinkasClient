import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";

export const useTabsScreenHook = () => {
	let navigation = useNavigation();
	let onTabsPress = () => {
		navigation.navigate(ROUTES.HOME_TABS);
	};
	return { onTabsPress };
};