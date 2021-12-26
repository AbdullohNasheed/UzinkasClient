import React from "react";
import {
	View,
	Text,
	ImageBackground,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import {
	InnIcon,
	LeftIcon,
	MassegeIcon,
	NotIcon,
	PhoneIcon,
	UserIcon,
	UsersIcon,
} from "../../assets/icons/icons";
import DefaultButton from "../../components/general/DefaultButton";
import DefaultImageBackground from "../../components/general/DefaultImageBackground";
import DefaultInput from "../../components/general/DefaultInput";
import BackHeader from "../../components/header/BackHeader";
import { useApplecationScreenHook } from "./hooks";
import { styles } from "./style";

let { onApplecationFromPress, onLoginPress } = useApplecationScreenHook();

const Applicationview = () => {
	return (
		<DefaultImageBackground>
			<SafeAreaView>
				<BackHeader />
				<ScrollView style={styles.scrollContainer}>
					<Text style={styles.text}>Заказ сотрудничества</Text>
					<Text style={styles.textButton}>Название организации</Text>
					<View style={styles.container}>
						<DefaultInput
							icon={NotIcon}
							placeholder={"Kiita Valezka"}
						/>
						<Text style={styles.textButton}>
							С кем можно связаться
						</Text>
						<DefaultInput
							icon={UsersIcon}
							placeholder={"Raphael Roytman"}
						/>
						<Text style={styles.textButton}>Номер телефона</Text>
						<DefaultInput
							icon={PhoneIcon}
							placeholder={"+998 93 555 55 55"}
						/>
						<Text style={styles.textButton}>Почта</Text>
						<DefaultInput
							icon={MassegeIcon}
							placeholder={"rafaelroytman2@gmail.com"}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<DefaultButton onPress={onApplecationFromPress} text={"Заполните анкету"} />
						<DefaultButton  textStyle={{color: '#fff',}} style={{backgroundColor: '#009899',}} onPress={onLoginPress} text={"Отправить"} />
					</View>
				</ScrollView>
			</SafeAreaView>
		</DefaultImageBackground>
	);
};

export default Applicationview;
