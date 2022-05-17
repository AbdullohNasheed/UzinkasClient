import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181926',
  },
  orderAccording: {
    flex: 1,
    backgroundColor: '#242530',
    borderRadius: 30,
  },
  errorBox: {
    height: 30,
    position: 'absolute',
    transform: [{translateX: 0}, {translateY: 0}],
    top: 90,
    left: 20,
    right: 20,
    zIndex: 1,
  },
  inputContainer: {
    marginVertical: 40,
    marginBottom: 60,
  },
  text: {
    marginHorizontal: 25,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#009899',
    marginVertical: 5,
  },
  bottonBox: {
    marginVertical: 60,
  },
});
