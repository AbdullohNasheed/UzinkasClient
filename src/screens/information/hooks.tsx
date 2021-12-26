import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";
export const useInformationScreenHook = () => {
	let navigation = useNavigation();
	let onDataonPress = () => {
		navigation.navigate(ROUTES.DATA);
	};
return {onDataonPress};
};

