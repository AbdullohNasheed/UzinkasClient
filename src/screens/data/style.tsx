import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242531',
    borderRadius: 30,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#009899',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  dataBox: {
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  kalendarbox: {
    marginVertical: 10,
    width: 38,
    height: 38,
    backgroundColor: '#181926',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  dataText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#009899',
  },
  dataContainer: {
    marginVertical: 30,
  },
  footer: {
    backgroundColor: '#181926',
    marginHorizontal: 15,
    borderRadius: 20,
  },
  monthContainer: {
      borderBottomWidth: 1,
      borderColor: '#242531',
  },
  bottonContainer:{},
  monthText:{
      fontSize: 24,
      fontWeight: 'bold',
      color: '#009899',
     marginVertical: 10,
  },
  textOne:{
      fontSize: 17,
      fontWeight: 'bold',
      color: '#EAEAEA',
  },
  textName:{
      color: '#B6B6B6',
      fontSize: 16,
      fontWeight: '600',
      marginVertical: 10,
  },
  textNuber:{
      color: '#fff',
      fontSize: 24,
      fontWeight: '600',
  },
  textMony:{
      fontSize: 17,
      fontWeight: 'bold',
      color: '#fff',
      marginVertical: 5,
  },
  textMonyNumber:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 8,
  },
  MonyContainer:{
      alignItems: 'center',
     borderBottomWidth: 1,
     borderColor:'#242531',
  },
  textThree:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#EAEAEA',
    marginVertical: 10,
  },
});
