import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242531',
  },
  headerContainer: {
    paddingVertical: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  box: {
    backgroundColor: '#2b2c36',
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginVertical: 10,
  },
  boxx: {
    backgroundColor: '#262732',
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#009899',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  boxOne: {
    flex: 1.2,
    alignItems: 'center',
  },
  boxTwo: {
    flex: 1.8,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    width: '70%',
  },
  textOne: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
    color: '#fff',
  },
});
