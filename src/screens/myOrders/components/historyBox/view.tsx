import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {styles} from './style';
import {DataWhiteIcon} from '../../../../assets/icons/icons';
import DefaultButton from '../../../../components/general/DefaultButton';
import {ComparativeHooks} from './hooks';
import HistoryButtonView from './components/historyButton/view';

const HistoryViewOne = () => {
  const {onPress} = ComparativeHooks();
  let phone = +998998595937;
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {/* <HistoryButtonView orderHistory={orderHistory} /> */}
        <DefaultButton onPress={onPress} text={'Заказать сравнительный акт'} />
        {/* <DefaultButton
          onPress={() => {
            Linking.openURL(`tel:${phone}`);
          }}
          text={'Позвонить инкассатору'}
        /> */}
      </View>
    </View>
  );
};

export default HistoryViewOne;
