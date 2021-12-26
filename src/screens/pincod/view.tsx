import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Image,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { EggIcon, PassIcon } from "../../assets/icons/icons";
import DefaultImageBackground from "../../components/general/DefaultImageBackground";
import { useTabsScreenHook } from "./hooks";
import { styles } from "./style";
let { onTabsPress } = useTabsScreenHook();
const PinCodview = () => {
	return (
		<View style={styles.container}>
			<DefaultImageBackground>
				<SafeAreaView style={styles.allContainer}>
					<View style={styles.passContainer}>
						<View style={styles.iconBox}>
							<EggIcon style={{ position: "absolute" }} />
							<PassIcon />
						</View>
						<Text style={styles.text}>Установите пин-код</Text>
						<View style={styles.passCircleBox}>
							<View style={styles.circle}></View>
							<View style={styles.circle}></View>
							<View style={styles.circle}></View>
							<View style={styles.circle}></View>
						</View>
						<View style={styles.circlePassBox}>
							<View style={styles.passNumberBox}>
								<TouchableOpacity style={styles.passNumber}>
									<Text style={styles.textNumber}>1</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.passNumber}>
									<Text style={styles.textNumber}>2</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.passNumber}>
									<Text style={styles.textNumber}>3</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.passNumberBox}>
								<TouchableOpacity style={styles.passNumber}>
									<Text style={styles.textNumber}>4</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={onTabsPress} style={styles.passNumber}>
									<Text style={styles.textNumber}>5</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.passNumber}>
									<Text style={styles.textNumber}>6</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.passNumberBox}>
								<TouchableOpacity style={styles.passNumber}>
									<Text style={styles.textNumber}>7</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.passNumber}>
									<Text style={styles.textNumber}>8</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.passNumber}>
									<Text style={styles.textNumber}>9</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.passNumberBox}>
								<TouchableOpacity style={styles.passNumber}>
									<Text style={styles.textNumber}>0</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</SafeAreaView>
			</DefaultImageBackground>
		</View>
	);
};

export default PinCodview;
