import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
	ScrollView,
} from "react-native";
import {
	BankIcon,
	CarbonIcon,
	GoldIcon,
	KalendarIcon,
	LoremIcon,
	MenuIcon,
	NoteIcon,
	PhoneIcon,
	TrackIcon,
} from "../../assets/icons/icons";
import DefaultButton from "../../components/general/DefaultButton";
import HeaderComponent from "../../components/header/Header";
import { useInformationScreenHook } from "./hooks";
import { styles } from "./style";
let { onDataonPress } = useInformationScreenHook();
const Informationview = () => {
	return (
		<SafeAreaView style={styles.container}>
			<HeaderComponent text={"Информация"} />
			<ScrollView
				contentContainerStyle={{ paddingBottom: 60 }}
				style={styles.informationContainer}
			>
				<View style={{ marginVertical: 40 }}>
					<TouchableOpacity>
						<View style={styles.informationBox}>
							<View style={styles.iconContainer}>
								<Image
									style={{ width: 30, height: 30 }}
									source={require("../../assets/image/building.png")}
								/>
							</View>
							<View style={styles.textContainer}>
								<Text style={styles.textOne}>Рафаэль</Text>
								<Text style={styles.textTwo}>
									Название орг.
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={styles.informationBox}>
							<View style={styles.iconContainer}>
								<CarbonIcon />
							</View>
							<View style={styles.textContainer}>
								<Text style={styles.textOne}>89080789789</Text>
								<Text style={styles.textTwo}>ИНН</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={styles.informationBox}>
							<View style={styles.iconContainer}>
								<PhoneIcon />
							</View>
							<View style={styles.textContainer}>
								<Text style={styles.textOne}>
									+998 93 555 55 55
								</Text>
								<Text style={styles.textTwo}>
									Контактный номер
								</Text>
							</View>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View style={styles.informationBox}>
							<View style={styles.iconContainer}>
								<KalendarIcon />
							</View>
							<View style={styles.textContainer}>
								<Text style={styles.textOne}>11.11.2011</Text>
								<Text style={styles.textTwo}>
									Дата заключения контракта
								</Text>
							</View>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View style={styles.informationBox}>
							<View style={styles.iconContainer}>
								<TrackIcon />
							</View>
							<View style={styles.textContainer}>
								<Text style={styles.textOne}>01.09.2002</Text>
								<Text style={styles.textTwo}>
									Номер маршрута
								</Text>
							</View>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View style={styles.informationBox}>
							<View style={styles.iconContainer}>
								<LoremIcon />
							</View>
							<View style={styles.textContainer}>
								<Text style={styles.textOne}>Lorem</Text>
								<Text style={styles.textTwo}>
									Тарифный план
								</Text>
							</View>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View style={styles.informationBox}>
							<View style={styles.iconContainer}>
								<GoldIcon />
							</View>
							<View style={styles.textContainer}>
								<Text style={styles.textOne}>+998</Text>
								<Text style={styles.textTwo}>
									Кол-во мешков
								</Text>
							</View>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View style={styles.informationBox}>
							<View style={styles.iconContainer}>
								<BankIcon />
							</View>
							<View style={styles.textContainer}>
								<Text style={styles.textOne}>Lorem</Text>
								<Text style={styles.textTwo}>
									Обслуживающий банк
								</Text>
							</View>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View style={styles.informationBox}>
							<View style={styles.iconContainer}>
								<BankIcon />
							</View>
							<View style={styles.textContainer}>
								<Text style={styles.textOne}>Lorem</Text>
								<Text style={styles.textTwo}>Транзит банк</Text>
							</View>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View style={styles.informationBox}>
							<View style={styles.iconContainer}>
								<CarbonIcon />
							</View>
							<View style={styles.textContainer}>
								<Text style={styles.textOne}>Lorem</Text>
								<Text style={styles.textTwo}>
									План сбора ( в неделю)
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				<View style={{ marginVertical: 40 }}>
					<DefaultButton onPress={onDataonPress} text={"История платежей"} />
					<DefaultButton text={"История посещений"} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Informationview;
