import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(24, 25, 38, 1)'
    },
    headerContainer:{
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: 35,
        height: 40,
    },
    text:{
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        marginVertical: 30,
    },
    applicationContainer: {
        backgroundColor: 'rgba(36, 37, 49, 1)',
        flex: 1,
        borderRadius: 30,
    },
    applicationBox:{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: 'rgba(38, 39, 50, 1)',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginVertical: 10,

    },
    applicationText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        marginRight: '35%',
        marginHorizontal: 25,

    },
    bottomBox:{
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 40,
        justifyContent: 'center',
    },
})