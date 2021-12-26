import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
	BackHandler,
} from "react-native";
import {
	LeftIcon,
	LocationIcon,
	MassegeIcon,
	MonyIcon,
	NotIcon,
	PhoneIcon,
	UsersIcon,
} from "../../assets/icons/icons";
import DefaultButton from "../../components/general/DefaultButton";
import DefaultImageBackground from "../../components/general/DefaultImageBackground";
import DefaultInput from "../../components/general/DefaultInput";
import BackHeader from "../../components/header/BackHeader";
import { useContractScreenHook } from "../contract/hooks";
import { styles } from "./style";

let {onApplecationPress } = useContractScreenHook();

const ApplicationFormview = () => {
	return (
		<DefaultImageBackground>
			<SafeAreaView>
				<BackHeader/>
				<ScrollView style={styles.scrollContainer}>
					<Text style={styles.text}>Анкета</Text>
					<Text style={styles.textButton}>Именование объекта</Text>
					<View style={styles.container}>
						<DefaultInput
							icon={NotIcon}
							placeholder={"Kiita Valezka"}
						/>
						<Text style={styles.textButton}>Местоположение</Text>
						<DefaultInput
							icon={LocationIcon}
							placeholder={"Raphael Roytman"}
						/>
						<Text style={styles.textButton}>
							Сумма денежных поступлений
						</Text>
						<DefaultInput
							icon={MonyIcon}
							placeholder={"+998 93 555 55 55"}
						/>
						<Text style={styles.textButton}>План работы</Text>
						<DefaultInput
							icon={NotIcon}
							placeholder={"rafaelroytman2@gmail.com"}
						/>
						<Text style={styles.textButton}>
							План посещения инкасс
						</Text>
						<DefaultInput
							icon={NotIcon}
							placeholder={"rafaelroytman2@gmail.com"}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<DefaultButton onPress={onApplecationPress} text={"Сохранить"} />
					</View>
				</ScrollView>
			</SafeAreaView>
		</DefaultImageBackground>
	);
};

export default ApplicationFormview;
