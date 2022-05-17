import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#rgba(38, 39, 50, 1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  boxOne: {
    borderBottomWidth: 1,
    borderColor: '#434343',
  },
  flexOne: {
    flex: 1,
    paddingVertical: 20,
  },
  flexTwo: {
    flex: 1,
  },
  historyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  historyBoxOne: {
    paddingVertical: 15,
    flexDirection: 'row',
    marginHorizontal: 40,
    justifyContent: 'space-between',
  },
  textOne: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  textTwo: {
    color: '#rgba(0, 152, 153, 1)',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textThree: {
    fontSize: 16,
    color: '#rgba(182, 182, 182, 1)',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTwo: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#434343',
    paddingVertical: 15,
  },
  textName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  textNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  one: {
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: '#434343',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  Text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#rgba(0, 152, 153, 1)',
    marginTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  image: {
    borderRadius: 5,
    width: 160,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  modalContainer: {
    justifyContent: 'center',
    backgroundColor: '#242531',
    marginHorizontal: 40,
    height: 200,
    borderRadius: 10,
  },
  modalBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
  },
  modalTextOne: {
    marginHorizontal: 10,
    fontSize:18,
    fontWeight: 'bold',
    color: '#009899',
    textAlign: 'center',
  },
  modalTextTwo: {
    fontSize: 18,
    fontWeight: '500',
    color: '#009899',
  },
  modalTextThree: {
    color: '#A92F2F',
    fontSize: 18,
    fontWeight: '500',
  },
});
