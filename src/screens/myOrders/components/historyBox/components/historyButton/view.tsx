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
import {HistoryViewScreen} from '../history';
import {statuses} from '../../../activeBox/components/myOrder/view';
import QRCode from 'react-native-qrcode-svg';
const HistoryButtonView = ({orderHistory}) => {
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
              <QRCode size={40} value={orderHistory?.hash} />
            </View>
            <Text style={styles.textOne}>{orderHistory?.date}</Text>
          </View>
          <View style={styles.timeBox}>
            <Text style={styles.textOne}>17:00</Text>
          </View>
        </View>
        <View style={styles.flexTwo}>
          <Text style={styles.textOne}>Статус:</Text>
          <Text style={styles.textTwo}>{statuses[orderHistory?.status]}</Text>
        </View>
      </TouchableOpacity>
      <View style={{marginHorizontal: 20}}>
        {!shouldShow ? <HistoryViewScreen orderHistory={orderHistory} /> : null}
      </View>
    </>
  );
};

export default HistoryButtonView;
