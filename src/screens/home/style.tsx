import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
       marginVertical: -5,
    },
    inkassImage:{
        width: Dimensions.get("window").width - 100,
		height: Dimensions.get("window").width - 100,
    },
})