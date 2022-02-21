import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {EggIcon, PassIcon} from '../../assets/icons/icons';
import DefaultImageBackground from '../../components/general/DefaultImageBackground';
import { ROUTES } from '../../navigation/ROUTES';
import {useTabsScreenHook} from './hooks';
import {styles} from './style';
const PinCodview = () => {
  const [passcode, setPasscode] = useState('');
  const navigation = useNavigation();

  const onNumberPress = (num: number) => {
    if (passcode.length <= 3) {
      setPasscode(passcode + num);
    }
  };
  useEffect(() => {
    if (passcode.length === 3) {
      navigation.navigate(ROUTES.HOME_TABS);
    }
  }, [passcode]);

  return (
    <View style={styles.container}>
      <DefaultImageBackground>
        <SafeAreaView style={styles.allContainer}>
          <View style={styles.passContainer}>
            <View style={styles.iconBox}>
              <EggIcon style={{position: 'absolute'}} />
              <PassIcon />
            </View>
            <Text style={styles.text}>Установите пин-код</Text>
            <View style={styles.passCircleBox}>
              <View
                style={[
                  styles.circle,
                  passcode[0] ? styles.bgWhite : styles.circle,
                ]}></View>
              <View
                style={[
                  styles.circle,
                  passcode[1] ? styles.bgWhite : styles.circle,
                ]}></View>
              <View
                style={[
                  styles.circle,
                  passcode[2] ? styles.bgWhite : styles.circle,
                ]}></View>
              <View
                style={[
                  styles.circle,
                  passcode[3] ? styles.bgWhite : styles.circle,
                ]}></View>
            </View>
            <View style={styles.circlePassBox}>
              <View style={styles.passNumberBox}>
                <TouchableOpacity
                  onPress={() => onNumberPress(1)}
                  style={styles.passNumber}>
                  <Text style={styles.textNumber}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onNumberPress(2)}
                  style={styles.passNumber}>
                  <Text style={styles.textNumber}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onNumberPress(3)}
                  style={styles.passNumber}>
                  <Text style={styles.textNumber}>3</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.passNumberBox}>
                <TouchableOpacity
                  onPress={() => onNumberPress(4)}
                  style={styles.passNumber}>
                  <Text style={styles.textNumber}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onNumberPress(5)}
                  style={styles.passNumber}>
                  <Text style={styles.textNumber}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onNumberPress(6)}
                  style={styles.passNumber}>
                  <Text style={styles.textNumber}>6</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.passNumberBox}>
                <TouchableOpacity
                  onPress={() => onNumberPress(7)}
                  style={styles.passNumber}>
                  <Text style={styles.textNumber}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onNumberPress(8)}
                  style={styles.passNumber}>
                  <Text style={styles.textNumber}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onNumberPress(9)}
                  style={styles.passNumber}>
                  <Text style={styles.textNumber}>9</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.passNumberBox}>
                <TouchableOpacity
                  onPress={() => onNumberPress(0)}
                  style={styles.passNumber}>
                  <Text style={styles.textNumber}>0</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </DefaultImageBackground>
    </View>
  );
};

export default PinCodview;
