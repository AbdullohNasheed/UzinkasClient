import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    image:{
        marginVertical: 20,
    },
    qrKodBox:{
        marginVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 5,
        // width: Dimensions.get("window").width - 150,
		// height: Dimensions.get("window").width - 170,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottonBox:{
        marginVertical: 45,
    },
})