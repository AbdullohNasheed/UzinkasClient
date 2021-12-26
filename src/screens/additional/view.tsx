import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import {
	ClockIcon,
	GoldIcon,
	KalendarMiniIcon,
	MonyIcon,
} from "../../assets/icons/icons";
import DefaultButton from "../../components/general/DefaultButton";
import InputBlack from "../../components/general/InputBlack";
import HeaderComponent from "../../components/header/Header";
import { useQrkodScreenHook } from "../orderAccording/hooks";
import { styles } from "./style";
let { onQrKodPress } = useQrkodScreenHook();
const Additionalview = () => {
	return (
		<SafeAreaView style={styles.container}>
			<HeaderComponent text={"Доп.визит"} />
			<ScrollView style={styles.additionalContainer}>
				<View style={{marginBottom: 120,}}>
					<View style={{ marginVertical: 40 }}>
						<Text style={styles.text}>Дата</Text>
						<InputBlack
							icon={KalendarMiniIcon}
							placeholder={"01.12"}
						/>
						<Text style={styles.text}>Время</Text>
						<InputBlack icon={ClockIcon} placeholder={"01.12"} />
						<Text style={styles.text}>Сумма</Text>
						<InputBlack icon={MonyIcon} placeholder={"8000"} />
						<Text style={styles.text}>Номер мешков</Text>
						<InputBlack icon={GoldIcon} placeholder={"№32421 "} />
						<View style={styles.textBox}>
							<Text style={styles.textOne}>
								Стоимость доп.визита
							</Text>
							<Text style={styles.textTwo}>1.000.000</Text>
						</View>
					</View>
					<DefaultButton onPress={onQrKodPress} text={"Генерация QR-кода"} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Additionalview;
