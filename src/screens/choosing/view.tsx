import React from "react";
import { Image, View } from "react-native";
import DefaultButton from "../../components/general/DefaultButton";
import DefaultImageBackground from "../../components/general/DefaultImageBackground";
import { useChoosingScreenHook } from "./hooks";
import { styles } from "./style";

const ChoosingView = () => {
	let { onLoginPress, onContractPress } = useChoosingScreenHook();
	return (
		<View style={{ justifyContent: 'center', flex: 1, backgroundColor: '#181926'}}>
			<View style={styles.img}>
				<Image source={require("../../assets/image/phone.png")} />
			</View>
			<View style={styles.buttonContainer}>
				<DefaultButton
					textStyle={{color: '#fff',}}
					onPress={onLoginPress}
					text={"Войти в личный кабинет"}
				/>
				<DefaultButton
					textStyle={{color: '#ffff',}}
					onPress={onContractPress}
					text={"Заказать сотрудничество"}
				/>
			</View>
		</View>
	);
};

export default ChoosingView;
