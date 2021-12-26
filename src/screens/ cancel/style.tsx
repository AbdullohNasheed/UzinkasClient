import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181926',
  },
  cancelContainer: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#242530',
  },
  text: {
    fontSize: Platform.OS === 'android' ? 20 : 23,
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 40,
    textAlign: 'center',
    lineHeight: 28,
  },
  icon: {
    marginVertical: Platform.OS === 'android' ? 20 : 40,
  },
  textFotter: {
    marginHorizontal: 50,
    textAlign: 'center',
    color: '#BFBFBF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
