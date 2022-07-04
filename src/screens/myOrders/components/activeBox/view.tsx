import React, {useState} from 'react';
import {LayoutAnimation, Text, TouchableOpacity, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import MyOrderView, {statuses} from './components/myOrder/view';
import {styles} from './style';
const ActiveView = ({order, counts}) => {
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
            <View>
              <Text style={styles.textOne}>{order?.date}</Text>
              <View style={styles.flexTwo}>
                <Text style={styles.textOne}>Статус:</Text>
                <Text style={styles.textTwo}>{statuses[order?.status]}</Text>
              </View>
            </View>
          </View>
          {/* <View style={styles.timeBox}>
            <Text style={styles.textOne}>17:00</Text>
          </View> */}
        </View>
      </TouchableOpacity>
      <View style={{marginHorizontal: 20}}>
        {!shouldShow ? <MyOrderView order={order} counts={counts} /> : null}
      </View>
    </>
  );
};

export default ActiveView;
