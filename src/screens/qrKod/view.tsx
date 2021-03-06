import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import DefaultButton from '../../components/general/DefaultButton';
import DefaultImageBackground from '../../components/general/DefaultImageBackground';
import {ROUTES} from '../../navigation/ROUTES';
import {useKodScreenHook} from './hooks';
import {styles} from './style';

const QrKodView = () => {
  const route = useRoute();
  const navigate = useNavigation();
  const {onBackPress, onOrderAdditionalPress} = useKodScreenHook();
  return (
    <DefaultImageBackground>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../assets/image/inakass3.png')}
          />
          <View style={styles.qrKodBox}>
            <QRCode size={210} value={route?.params?.hash} />
            {/* <Image source={require('../../assets/image/qrkod.png')} /> */}
          </View>
        </View>
        <View style={styles.bottonBox}>
          <DefaultButton
            onPress={onOrderAdditionalPress}
            text={'Подтвердить'}
          />
          <DefaultButton onPress={onBackPress} text={'Отмена'} />
        </View>
      </SafeAreaView>
    </DefaultImageBackground>
  );
};

export default QrKodView;
