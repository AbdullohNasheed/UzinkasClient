import React, {useState} from 'react';
import {
  LayoutAnimation,
  LogBox,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import {TimeTopIcon, TimeUpIcon} from '../../../assets/icons/icons';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
export interface DefaultButtonProps {
  text?: string;
}

const BoxTimeJobOne = ({text}: DefaultButtonProps) => {
  const activeColor = '#019899';
  const inActiveColorOne = '#242531';
  const inActiveColorTwo = '#10434c';
  const [toggleActive, setToggle] = useState(false);
  const [count, setCount] = useState(12);
  const [countOne, setCountOne] = useState(13);
  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }
  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }
  function decrementCountOne() {
    setCountOne(prevCount => prevCount - 1);
  }
  function incrementCountOne() {
    setCountOne(prevCount => prevCount + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textWek}>{text}</Text>
      <TouchableOpacity
        style={[
          styles.toggleContainer,
          {backgroundColor: toggleActive ? inActiveColorTwo : inActiveColorOne},
        ]}
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          setToggle(!toggleActive);
        }}
        activeOpacity={1}>
        <View
          style={[
            styles.toggleBtn,
            toggleActive
              ? {backgroundColor: activeColor, alignSelf: 'flex-end'}
              : {backgroundColor: activeColor},
          ]}
        />
      </TouchableOpacity>
      <Text style={styles.text}>C</Text>
      <View style={styles.dateBox}>
        <Text
          style={[
            styles.textTime,
            toggleActive ? {color: '#fff'} : {color: '#3e3e3e'},
          ]}>
          {count}
        </Text>
        <Text
          style={[
            styles.textTime,
            toggleActive ? {color: '#fff'} : {color: '#3e3e3e'},
          ]}>
          :00
        </Text>
        <View style={{}}>
          <TouchableOpacity style={styles.onPress} onPress={incrementCount}>
            <TimeTopIcon />
          </TouchableOpacity>
          <View style={{marginVertical: 1.5}} />
          <TouchableOpacity style={styles.onPress} onPress={decrementCount}>
            <TimeUpIcon />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.text}>до</Text>
      <View style={styles.dateBox}>
        <Text
          style={[
            styles.textTime,
            toggleActive ? {color: '#fff'} : {color: '#3e3e3e'},
          ]}>
          {countOne}
        </Text>
        <Text
          style={[
            styles.textTime,
            toggleActive ? {color: '#fff'} : {color: '#3e3e3e'},
          ]}>
          :00
        </Text>
        <View style={{}}>
          <TouchableOpacity style={styles.onPress} onPress={incrementCountOne}>
            <TimeTopIcon />
          </TouchableOpacity>
          <View style={{marginVertical: 1.5}} />
          <TouchableOpacity style={styles.onPress} onPress={decrementCountOne}>
            <TimeUpIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default BoxTimeJobOne;
const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateBox: {
    flexDirection: 'row',
    backgroundColor: '#242531',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  status: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  toggleContainer: {
    height: 10,
    justifyContent: 'center',
    width: 35,
    borderRadius: 50,
    // overflow: 'hidden',
  },
  toggleBtn: {
    width: 18,
    height: 18,
    borderRadius: 1000,
    backgroundColor: 'red',
  },
  textWek: {
    width: '30%',
    fontSize: 16,
    color: '#009899',
    fontWeight: '400',
  },
  textTime: {
    color: '#3e3e3e',
    fontSize: 14,
  },
  onPress: {
    paddingLeft: 5,
  },
  text: {
    color: '#009899',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
