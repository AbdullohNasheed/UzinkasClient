import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import DefaultButton from '../../components/general/DefaultButton';
import DefaultImageBackground from '../../components/general/DefaultImageBackground';
import {ROUTES} from '../../navigation/ROUTES';
import {useKodScreenHookOne} from './hooks';
import {styles} from './style';

const QrKodViewOne = () => {
  const route = useRoute();
  const navigate = useNavigation();
  const {onBackPress, onOrderAdditionalPress, onSavePress, ref} =
    useKodScreenHookOne();

  return (
    <DefaultImageBackground>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../assets/image/inakass3.png')}
          />
          <View style={styles.qrKodBox}>
            <QRCode
              getRef={e => (ref.current = e)}
              size={210}
              value={route?.params?.order.hash}
            />
          </View>
        </View>
        <View style={styles.bottonBox}>
          <DefaultButton text={'Сохранить'} onPress={onSavePress} />
          <DefaultButton onPress={onBackPress} text={'На главную'} />
        </View>
      </SafeAreaView>
    </DefaultImageBackground>
  );
};

export default QrKodViewOne;
