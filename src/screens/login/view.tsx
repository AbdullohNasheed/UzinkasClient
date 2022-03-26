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
import {ScrollView} from 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native-paper';
import {InnIcon, NotIcon, UserIcon} from '../../assets/icons/icons';
import DefaultImageBackground from '../../components/general/DefaultImageBackground';
import DefaultInput from '../../components/general/DefaultInput';
import {useLoginScreenHook} from './hooks';
import {styles} from './style';

const LoginView = () => {
  let {
    onRegisterPress,
    handleChange,
    loading,
    state,
    date,
    error,
    onDataChange,
    setDate,
  } = useLoginScreenHook();
  return (
    <View style={styles.Container}>
      <DefaultImageBackground>
        <SafeAreaView style={styles.allContainer}>
          <ScrollView>
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
                hasError={!!error}
              />
              {error && (
                // <View style={styles.errorBox}>
                <Text style={styles.errorText}>{error.message}</Text>
                // </View>
              )}
              <DefaultInput
                icon={InnIcon}
                placeholder={'ИНН'}
                onChange={handleChange('inn')}
                value={state.inn}
                hasError={!!error}
                keyboardType={'numeric'}
              />
              {error && (
                // <View style={styles.errorBox}>
                <Text style={styles.errorText}>{error.message}</Text>
                // </View>
              )}
              <DefaultInput
                icon={NotIcon}
                onChange={handleChange('number')}
                value={state.number}
                placeholder={'Номер договора'}
                hasError={!!error}
                keyboardType={'phone-pad'}
              />
              {error && <Text style={styles.errorText}>{error.message}</Text>}
            </View>
            <TouchableOpacity
              onPress={onRegisterPress}
              style={styles.buttonBox}>
              {loading ? (
                <ActivityIndicator size={'large'} color={'white'} />
              ) : (
                <Text style={styles.buttonText}>Войти</Text>
              )}
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </DefaultImageBackground>
    </View>
  );
};

export default LoginView;
