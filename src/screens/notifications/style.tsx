import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181926',
  },
  notificationContainer: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#242530',
  },
  dataBox: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  textBox: {},
  dataContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: 'rgba(38, 39, 50, 1)',
    elevation: 17,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 0,
    borderRadius: 12,
  },
  box: {
    marginVertical: 25,
    marginBottom: 120,
  },
  textOne: {
    fontSize: 17,
    color: '#fff',
  },
  textTwo: {
    fontSize: 17,
    color: '#009899',
  },
});
