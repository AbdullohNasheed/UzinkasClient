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
import {statuses, statusesColor} from '../../../activeBox/components/myOrder/view';
import QRCode from 'react-native-qrcode-svg';

const HistoryButtonView = ({orderHistory, counts}) => {
  const [shouldShow, setShouldShow] = useState(false);
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
          {statuses[orderHistory?.status] ? (
            <Text style={styles.textOne}>Статус:</Text>
          ) : null}
          <Text
            style={[
              styles.textTwo,
              {color: statusesColor[orderHistory?.status]},
            ]}>
            {statuses[orderHistory?.status]}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{marginHorizontal: 20}}>
        {!shouldShow ? null : (
          <HistoryViewScreen orderHistory={orderHistory} counts={counts} />
        )}
      </View>
    </>
  );
};

export default HistoryButtonView;
