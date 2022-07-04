// import { useNavigation } from "@react-navigation/core";
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useRef} from 'react';
import {Platform, Share} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {ROUTES} from '../../navigation/ROUTES';
import RNFetchBlob from 'rn-fetch-blob';
import {PERMISSIONS, request} from 'react-native-permissions';

export const useKodScreenHookOne = () => {
  const ref = useRef<QRCode>();
  let navigation = useNavigation();
  const route = useRoute();
  const onOrderAdditionalPress = () => {
    navigation.navigate(ROUTES.ORDERADITIONAL);
  };
  const onBackPress = () => {
    navigation.navigate(ROUTES.HOME_SCREEN);
  };

  const onSavePress = () => {
    console.log(ref.current);
    request(
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
        : PERMISSIONS.IOS.PHOTO_LIBRARY,
    );
    request(
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
        : PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY,
    );
    ref.current?.toDataURL(data => {
      const shareImageBase64 = {
        title: 'QR',
        message: 'QR CODE',
        url: `data:image/png;base64,${data}`,
      };
      const dirs = RNFetchBlob.fs.dirs;
      var path = dirs.DCIMDir + `/${route.params?.order.hash}.png`;
      RNFetchBlob.fs.writeFile(path, data, 'base64').then(res => {
        console.log('File : ', res);
      });
    });
  };

  return {onBackPress, onOrderAdditionalPress, onSavePress, ref};
};

// };
