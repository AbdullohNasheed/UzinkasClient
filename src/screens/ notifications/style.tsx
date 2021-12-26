import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#181926',
    },
    notificationContainer:{
        flex: 1,
        borderRadius: 30,
        backgroundColor: '#242530',
    },
    dataBox: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    textBox:{
        flex: 0.9,
        marginVertical: 15,
    },
    dataContainer:{
        flexDirection: 'row',
        marginVertical: 8,
        flex: 0.1,
        marginHorizontal: 10,
        backgroundColor: 'rgba(38, 39, 50, 1)',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        borderRadius: 12,
        
    },
    box:{
        marginVertical: 25,
        marginBottom: 120,
    },
    textOne:{
        fontSize: 15,
        color: '#fff', 
        marginVertical: 35,
        marginHorizontal: 25,
   },
    textTwo:{
        fontSize: 13,
        color: '#009899',
    },
})