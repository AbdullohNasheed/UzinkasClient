import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {styles} from './style';
import DefaultButton from '../../../../../../components/general/DefaultButton';
import QRCode from 'react-native-qrcode-svg';

export let statuses = {
  '0': ' Новая заявка',
  '1': ' Принята инкасатором',
  '2': ' Привязано инкасатору',
  '3': ' Отмененная инкасация',
};
let phone = 998595937;
const MyOrderView = ({order}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.boxOne}>
          <View style={styles.flexOne}>
            <View style={styles.historyBox}>
              <Text style={styles.textOne}>{order?.date}</Text>
            </View>
            <View style={styles.historyBox}>
              <Text style={styles.textOne}>Статус:</Text>
              <Text style={styles.textTwo}>{statuses[order?.status]}</Text>
            </View>
          </View>
          <View style={styles.flexTwo}>
            <View style={styles.historyBox}>
              <Text style={styles.textOne}>Ташрифлар сони</Text>
            </View>
            <View style={styles.historyBoxOne}>
              <View style={styles.box}>
                <Text style={styles.textThree}>Режали</Text>
                <Text style={styles.textOne}>4</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.textThree}>Кушимча</Text>
                <Text style={styles.textOne}>0</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.boxTwo}>
          <Text style={styles.textName}>Сумма</Text>
          <Text style={styles.textNumber}>{order?.amount}</Text>
        </View>
        <View style={styles.one}>
          <View style={styles.flexTwo}>
            <View style={styles.historyBox}>
              <Text style={styles.textOne}>Ташрифлар сони</Text>
            </View>
            <View style={styles.historyBoxOne}>
              <View style={styles.box}>
                <Text style={styles.textThree}>Катьий</Text>
                <Text style={styles.textOne}>100 000</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.textThree}>%</Text>
                <Text style={styles.textOne}>66 500</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.boxTwo}>
          <Text style={styles.textName}>Тулов суммаси</Text>
          <Text style={styles.textNumber}>100 000</Text>
        </View>
        <View style={styles.boxTwo}>
          <Text style={styles.text}>Инкассатор</Text>
          <Text style={styles.Text}>{order?.client?.name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            <QRCode size={150} value={order?.hash} />
          </View>
        </View>
      </View>
      <View style={{marginVertical: 20}}>
        <DefaultButton
          onPress={() => {
            Linking.openURL(`tel:${phone}`);
          }}
          text={'Позвонить инкассатору'}
        />
      </View>
    </>
  );
};

export default MyOrderView;
