import { Dimensions, Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "rgba(24, 25, 38, 1)",
	},
	allContainer: {
		flex: 1,
		// alignItems: "center",
	},
	imageInkass: {
		// width: Dimensions.get("window").width - 210,
		// height: Dimensions.get("window").width - 230,
		width: 100,
		height: 110,
		marginVertical: 20,
		// marginVertical: 35,
	},
	buttonBox: {
		borderWidth: 1,
		borderColor: "rgba(0, 152, 153, 1)",
		marginHorizontal: 20,
		alignItems: "center",
		borderRadius: 15,
	},
	buttonText: {
		marginVertical: 16,
		color: "rgba(0, 152, 153, 1)",
		fontSize: 22,
		fontWeight: "bold",
	},
	text: {
		// marginVertical: 20,
		textAlign: 'center',
		color: "#E3A162",
		fontSize: 17,
		fontWeight: "500",
		marginHorizontal: 20,
	},
	buttonContainer: {
		marginVertical: 40,
	},
});