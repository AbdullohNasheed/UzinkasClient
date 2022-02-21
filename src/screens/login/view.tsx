import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {InnIcon, NotIcon, UserIcon} from '../../assets/icons/icons';
import DefaultImageBackground from '../../components/general/DefaultImageBackground';
import DefaultInput from '../../components/general/DefaultInput';
import {useLoginScreenHook} from './hooks';
import {styles} from './style';

const LoginView = () => {
  let {onRegisterPress, handleChange, state} = useLoginScreenHook();
  return (
    <View style={styles.Container}>
      <DefaultImageBackground>
        <SafeAreaView style={styles.allContainer}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/image/inakass3.png')}
              style={styles.imageInkass}
            />
            <Text style={styles.text}>РЕСПУБЛИКАНСКАЯСЛУЖБАИ НКАССАЦИИ</Text>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: '700',
                marginVertical: 30,
              }}>
              Авторизация
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <DefaultInput
              icon={UserIcon}
              placeholder={'Территория'}
              value={state.location}
              onChange={handleChange('location')}
            />
            <DefaultInput
              icon={InnIcon}
              placeholder={'ИНН'}
              onChange={handleChange('inn')}
              value={state.inn}
            />
            <DefaultInput
              icon={NotIcon}
              onChange={handleChange('number')}
              value={state.number}
              placeholder={'Номер договора'}
            />
          </View>
          <TouchableOpacity onPress={onRegisterPress} style={styles.buttonBox}>
            <Text style={styles.buttonText}>Войти</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </DefaultImageBackground>
    </View>
  );
};

export default LoginView;
