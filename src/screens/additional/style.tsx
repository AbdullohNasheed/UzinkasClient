import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181926',
  },
  additionalContainer: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#242530',
  },
  errorBox: {
    height: 60,
    position: 'absolute',
    transform: [{translateX: 0}, {translateY: 0}],
    top: 0,
    left: 20,
    right: 20,
  },
  text: {
    marginHorizontal: 25,
    fontSize: 16,

    color: '#009899',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  textBox: {
    flexDirection: 'row',
    marginHorizontal: 25,
    justifyContent: 'space-between',
    marginVertical: 20,
    alignItems: 'center',
  },
  textOne: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  textTwo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#009899',
  },
});