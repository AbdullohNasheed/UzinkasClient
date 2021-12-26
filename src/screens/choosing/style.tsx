import { AccessibilityInfo, Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageBackground:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(24, 25, 38, 1)",
    },
    img:{
       alignItems: 'center',
    },
    buttonContainer:{
        marginTop: - 120,
    },
    // image:{
    //     width: Dimensions.get("window").width - 100,
    //     height: Dimensions.get("window").width - 60,
    //     top: undefined,
    //     bottom: undefined,
    //     left: undefined,
    //     right: undefined,
    // }
})