import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  styleOne: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    // paddingVertical: 15,
    backgroundColor: '#rgba(38, 39, 50, 1)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  container: {
    flex: 1,
  },
  buttonBox: {
    borderRightWidth: 1,
    borderColor: '#fff',
    paddingVertical: 15,
    flex: 1,
    alignItems: 'center',
  },
  buttonBoxTwo: {
    paddingVertical: 15,
    borderLeftWidth: 1,
    borderColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  headerBox: {
    marginTop: 30,
  },
  scrollContainer: {
    flex: 1,
  },
});
