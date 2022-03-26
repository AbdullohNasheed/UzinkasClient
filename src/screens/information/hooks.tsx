import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useSelector } from "react-redux";
import { ROUTES } from "../../navigation/ROUTES";
import userSlice, { selectUser } from "../../store/slices/userSlice";
export const useInformationScreenHook = () => {
	let user = useSelector(selectUser);
	let navigation = useNavigation();
	let onDataOnPress = () => {
		navigation.navigate(ROUTES.DATA);
	};
return {onDataOnPress, userSlice, user};
};

