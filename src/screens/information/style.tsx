import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
			flex: 1,
			backgroundColor: "rgba(24, 25, 38, 1)",
	},
    informationContainer: {
        flex: 1,
        borderRadius: 30,
        backgroundColor: '#242530',
    },
	headerContainer: {
		flexDirection: "row",
		marginHorizontal: 20,
		justifyContent: "space-between",
		alignItems: "center",
	},
	image: {
		width: 35,
		height: 40,
	},
	text: {
		fontSize: 20,
		fontWeight: "700",
		color: "#fff",
		marginVertical: 30,
	},
    informationBox:{
        marginHorizontal: 15,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(219, 219, 219, 1)',
        alignItems: 'center',
    },
    iconContainer: {
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: ' rgba(24, 25, 38, 1)',
        marginVertical: 20,
    },
    textContainer:{
        marginHorizontal: 25,
    },
    textOne:{
        fontSize: 15,
        fontWeight: '700',
        color: '#fff',
    },
    textTwo:{
        color: 'rgba(182, 182, 182, 1)',
        fontSize: 14,
        fontWeight: '500',
        marginRight:"35%",
        marginVertical: 5,
    },
});
