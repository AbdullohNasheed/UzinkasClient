import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { DataBigIcon, KalendarIcon, TickIcon } from "../../assets/icons/icons";
import HeaderComponent from "../../components/header/Header";
import { styles } from "./style";

const VisitHistoryview = () => {
	return (
		<SafeAreaView style={styles.container}>
			<HeaderComponent text={"История посещений"} />
			<ScrollView style={styles.visitContainer}>
				<View style={{marginVertical: 15, marginBottom: 120,}}>
					<View style={styles.box}>
						<View style={styles.allBox}>
							<View style={styles.miniBox}>
								<View style={styles.boxAll}>
									<View style={styles.boxData}>
										<DataBigIcon />
									</View>
									<View style={styles.textData}>
										<Text style={styles.textOne}>
											11.11.2011
										</Text>
										<Text style={styles.textTwo}>Дата</Text>
									</View>
								</View>
								<View style={styles.tickBox}>
									<TickIcon />
								</View>
							</View>
						</View>
						<View style={styles.allBox}>
							<View style={styles.miniBox}>
								<View style={styles.boxAll}>
									<View style={styles.boxData}>
										<DataBigIcon />
									</View>
									<View style={styles.textData}>
										<Text style={styles.textOne}>
											8000$
										</Text>
										<Text style={styles.textTwo}>
											Сумма
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View style={styles.allBox}>
							<View style={styles.miniBox}>
								<View style={styles.boxAll}>
									<View style={styles.boxData}>
										<DataBigIcon />
									</View>
									<View style={styles.textData}>
										<Text style={styles.textOne}>5</Text>
										<Text style={styles.textTwo}>
											Кол-во мешков
										</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.box}>
						<View style={styles.allBox}>
							<View style={styles.miniBox}>
								<View style={styles.boxAll}>
									<View style={styles.boxData}>
										<DataBigIcon />
									</View>
									<View style={styles.textData}>
										<Text style={styles.textOne}>
											11.11.2011
										</Text>
										<Text style={styles.textTwo}>Дата</Text>
									</View>
								</View>
								<View style={styles.tickBox}>
									<TickIcon />
								</View>
							</View>
						</View>
						<View style={styles.allBox}>
							<View style={styles.miniBox}>
								<View style={styles.boxAll}>
									<View style={styles.boxData}>
										<DataBigIcon />
									</View>
									<View style={styles.textData}>
										<Text style={styles.textOne}>
											8000$
										</Text>
										<Text style={styles.textTwo}>
											Сумма
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View style={styles.allBox}>
							<View style={styles.miniBox}>
								<View style={styles.boxAll}>
									<View style={styles.boxData}>
										<DataBigIcon />
									</View>
									<View style={styles.textData}>
										<Text style={styles.textOne}>5</Text>
										<Text style={styles.textTwo}>
											Кол-во мешков
										</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.box}>
						<View style={styles.allBox}>
							<View style={styles.miniBox}>
								<View style={styles.boxAll}>
									<View style={styles.boxData}>
										<DataBigIcon />
									</View>
									<View style={styles.textData}>
										<Text style={styles.textOne}>
											11.11.2011
										</Text>
										<Text style={styles.textTwo}>Дата</Text>
									</View>
								</View>
								<View style={styles.tickBox}>
									<TickIcon />
								</View>
							</View>
						</View>
						<View style={styles.allBox}>
							<View style={styles.miniBox}>
								<View style={styles.boxAll}>
									<View style={styles.boxData}>
										<DataBigIcon />
									</View>
									<View style={styles.textData}>
										<Text style={styles.textOne}>
											8000$
										</Text>
										<Text style={styles.textTwo}>
											Сумма
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View style={styles.allBox}>
							<View style={styles.miniBox}>
								<View style={styles.boxAll}>
									<View style={styles.boxData}>
										<DataBigIcon />
									</View>
									<View style={styles.textData}>
										<Text style={styles.textOne}>5</Text>
										<Text style={styles.textTwo}>
											Кол-во мешков
										</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default VisitHistoryview;
