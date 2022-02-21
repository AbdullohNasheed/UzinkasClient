import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(24, 25, 38, 1)',
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  allContainer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  passContainer: {
    alignItems: 'center',
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    marginVertical: 30,
  },
  imagePass: {},
  text: {
    fontSize: 25,
    color: '#fff',
    marginVertical: 25,
  },
  passCircleBox: {
    flexDirection: 'row',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 100,
    borderColor: 'rgba(0, 152, 153, 1)',
    borderWidth: 1,
    marginHorizontal: 6,
  },
  circlee: {
    width: 20,
    height: 20,
    borderRadius: 100,
    marginHorizontal: 6,
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  passNumber: {
    borderWidth: 1,
    borderColor: 'rgba(0, 152, 153, 1)',
    borderRadius: 100,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  passNumberBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  circlePassBox: {
    marginVertical: 60,
  },
  textNumber: {
    color: 'rgba(65, 65, 65, 1)',
    fontSize: 30,
    fontWeight: '600',
  },
});
