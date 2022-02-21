import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StyleProp, ViewStyle } from "react-native";
import { BellIcoon, MenuIcon } from "../../assets/icons/icons";
import { ROUTES } from "../../navigation/ROUTES";

export interface HeaderComponentProps {
    text: string;
    style: StyleProp<ViewStyle>

}
 let navigation = useNavigation();
 const onNotificationPress = () => {
   navigation.navigate(ROUTES.NOTIFICATION);
 };


const HeaderComponent = ({text}:HeaderComponentProps) => {
    return (
		<View style={styles.headerContainer}>
			<Image
				source={require("../../assets/image/inkass2.png")}
				style={styles.image}
			/>
			<Text style={styles.text}>{text}</Text>
			<TouchableOpacity onPress={onNotificationPress}>
				<BellIcoon />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginTop: 25,
    },
    image: {
        width: 40,
        height: 45,
    },
    text:{
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        marginVertical: 30,
    },
})

export default HeaderComponent;
