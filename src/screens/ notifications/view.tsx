import React from "react";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { DataIcon } from "../../assets/icons/icons";
import HeaderComponent from "../../components/header/Header";
import { styles } from "./style";

const Notifictionview = () => {
	return (
		<SafeAreaView style={styles.container}>
			<HeaderComponent text={"Уведомления"} />
			<ScrollView style={styles.notificationContainer}>
				<View style={styles.box}>
					<TouchableOpacity style={styles.dataContainer}>
						<View style={styles.textBox}>
							<Text style={styles.textOne}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit
							</Text>
						</View>
						<View style={styles.dataBox}>
							<Text style={styles.textTwo}> 21.12.2021</Text>
							<DataIcon style={{marginHorizontal: 5,}}/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.dataContainer}>
						<View style={styles.textBox}>
							<Text style={styles.textOne}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit
							</Text>
						</View>
						<View style={styles.dataBox}>
							<Text style={styles.textTwo}> 21.12.2021</Text>
							<DataIcon style={{marginHorizontal: 5,}}/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.dataContainer}>
						<View style={styles.textBox}>
							<Text style={styles.textOne}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit
							</Text>
						</View>
						<View style={styles.dataBox}>
							<Text style={styles.textTwo}> 21.12.2021</Text>
							<DataIcon style={{marginHorizontal: 5,}}/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.dataContainer}>
						<View style={styles.textBox}>
							<Text style={styles.textOne}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit
							</Text>
						</View>
						<View style={styles.dataBox}>
							<Text style={styles.textTwo}> 21.12.2021</Text>
							<DataIcon style={{marginHorizontal: 5,}}/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.dataContainer}>
						<View style={styles.textBox}>
							<Text style={styles.textOne}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit
							</Text>
						</View>
						<View style={styles.dataBox}>
							<Text style={styles.textTwo}> 21.12.2021</Text>
							<DataIcon style={{marginHorizontal: 5,}}/>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Notifictionview;
