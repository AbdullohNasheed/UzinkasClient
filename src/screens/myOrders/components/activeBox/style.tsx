import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: '#rgba(38, 39, 50, 1)',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    borderRadius: 10,
  },
  flexOne: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeBox: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  imageBox: {
    flex: 1.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexTwo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  image: {
    borderRadius: 5,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#fff',
    marginHorizontal: 15,
  },
  textOne: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  textTwo: {
    fontSize: 20,
    color: '#rgba(0, 152, 153, 1)',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
