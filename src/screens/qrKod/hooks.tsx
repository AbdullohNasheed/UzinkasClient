// import { useNavigation } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";
// import { ROUTES } from "../../navigation/ROUTES";

// export const usePincodScreenHook = () => {
// 	let navigation = useNavigation();
// 	let onPinCodPress = () => {
// 		navigation.navigate(ROUTES.PINCODE);
// 	};
// 	return { onPinCodPress };
export const useKodScreenHook = () => {
    let navigation = useNavigation();
    let onCenceelonPress = () => {
        navigation.navigate("Home", { screen: ROUTES.CANCEL });
    };
    // let onApplecation2Press = () => {
    // 	navigation.navigate(ROUTES.APPLICATION);
    // };

    return { onCenceelonPress };
};

// };
