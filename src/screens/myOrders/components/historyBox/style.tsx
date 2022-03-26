import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonBox: {
    flexDirection: 'row',
    marginHorizontal: 25,
    justifyContent: 'space-between',
  },
  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    marginHorizontal: 20,
    backgroundColor: '#rgba(38, 39, 50, 1)',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 180,
  },
});
