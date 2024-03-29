import {StyleSheet} from 'react-native';
import { statuses } from '../../../activeBox/components/myOrder/view';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: '#2b2c36',
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
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 5,
    height: 50,
  },
  textOne: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  textTwo: {
    fontSize: 18,
    color:'#rgba(0, 152, 153, 1)',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
