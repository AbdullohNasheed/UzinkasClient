import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-svg';
import {MenuIcon, TrackIcon, TrackTwoIcon} from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import HeaderComponent from '../../components/header/Header';
import {usesOrderScreenHook} from './hooks';
import {styles} from './style';
const ToOrderview = () => {
  let {onOrderPress, onAdditionalPress, loading} = usesOrderScreenHook();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent hasMenu hasMenuOne={false} text={'Заказать'} />
      <View style={styles.toOrderContainer}>
        <View
          style={{alignItems: 'center', flex: 0.7, justifyContent: 'center'}}>
          <View style={styles.trackBox}>
            <TrackTwoIcon style={styles.icon} />
          </View>
        </View>
        <DefaultButton
          loading={loading}
          onPress={onOrderPress}
          text={'По плану'}
        />
        <DefaultButton
          onPress={onAdditionalPress}
          text={'Заказать доп. визит'}
        />
      </View>
    </SafeAreaView>
  );
};

export default ToOrderview;
