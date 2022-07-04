import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242531',
  },
  inputBox: {
    marginVertical: 20,
    backgroundColor: '#242531',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12.35,

    elevation: 19,
    marginHorizontal: 20,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'android' ? 5 : 15,
    borderRadius: 15,
    alignItems: 'center',
  },
});
