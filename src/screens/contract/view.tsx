import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	Dimensions,
	ImageBackground,
} from "react-native";
import { ContractIcon } from "../../assets/icons/icons";
import DefaultButton from "../../components/general/DefaultButton";
import DefaultImageBackground from "../../components/general/DefaultImageBackground";
import { useContractScreenHook } from "./hooks";
import { styles } from "./style";
const Contractview = () => {
	let { onApplecationPress, onApplecation2Press } = useContractScreenHook();
	return (
		<DefaultImageBackground>
			<View style={styles.contractContainer}>
				<View style={styles.iconContainer}>
					<ContractIcon />
					<Text style={styles.textContract}>
						Есть ли у вас договор?
					</Text>
				</View>
				<DefaultButton onPress={onApplecationPress} text={"Да"} />
				<DefaultButton onPress={onApplecation2Press} text={"Нет"} />
			</View>
		</DefaultImageBackground>
	);
};

export default Contractview;
