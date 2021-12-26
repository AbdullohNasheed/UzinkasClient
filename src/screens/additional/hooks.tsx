
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";
export const useQrkodScreenHook = () => {
	let navigation = useNavigation();
	let onQrKodPress = () => {
		navigation.navigate(ROUTES.QRKOD);
	};
	return { onQrKodPress };
};