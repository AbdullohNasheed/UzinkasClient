import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  LayoutAnimation,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {MyOrderHook} from './hooks';
import {MyOrdersView} from './../../view';
import ModalBox from './components/modal/modal';
import MyOrderView, {statuses} from './components/myOrder/view';
import {useRoute} from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
const ActiveView = ({order}) => {
  const [shouldShow, setShouldShow] = useState(true);
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setShouldShow(!shouldShow);
        }}>
        <View style={styles.flexOne}>
          <View style={styles.imageBox}>
            <View style={styles.image}>
              <QRCode size={40} value={order?.hash} />
            </View>
            <Text style={styles.textOne}>{order?.date}</Text>
          </View>
          <View style={styles.timeBox}>
            <Text style={styles.textOne}>17:00</Text>
          </View>
        </View>
        <View style={styles.flexTwo}>
          <Text style={styles.textOne}>Статус:</Text>
          <Text style={styles.textTwo}>{statuses[order?.status]}</Text>
        </View>
      </TouchableOpacity>
      <View style={{marginHorizontal: 20}}>
        {!shouldShow ? <MyOrderView order={order} /> : null}
      </View>
    </>
  );
};

export default ActiveView;
