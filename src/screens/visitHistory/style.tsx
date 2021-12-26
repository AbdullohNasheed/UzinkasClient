import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#181926",
	},
	visitContainer: {
		flex: 1,
		borderRadius: 30,
		backgroundColor: "#242530",
	},
	allBox: {
	},
    miniBox:{
        flexDirection: "row",
        justifyContent: 'space-between',
    },
	box: {
        marginVertical: 15,
        backgroundColor: "#181926",
		marginHorizontal: 20,
        borderRadius: 15,
	},
	boxData: {
		width: 45,
		height: 45,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#242530",
		borderRadius: 5,
        flexDirection: 'row',
	},
	textData: {
        justifyContent: 'center',
        marginHorizontal: 15,
    },
	tickBox: {
        marginVertical: 20,
        marginHorizontal: 20,
    },
	textOne: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
	textTwo: {
        fontSize: 17,
        fontWeight: '500',
        color: '#B6B6B6',
    },
	boxAll: {
		marginHorizontal: 20,
		marginVertical: 15,
		flexDirection: "row",
        justifyContent: 'space-between',
	},
});
