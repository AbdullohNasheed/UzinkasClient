import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import {
  BellIcon,
  DelitIcon,
  HandPhoneIcon,
  MenuIcon,
  NoteeIcon,
} from '../../assets/icons/icons';
import HeaderComponent from '../../components/header/Header';
import {usePersonalScreenHook} from './hooks';
import {styles} from './style';
let {onInfarmationPress, onNotificationPress, onCancelonPress} =
  usePersonalScreenHook();
const Personalview = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent text={'Личный кабинет'} />
      <ScrollView style={styles.applicationContainer}>
        <View style={{marginVertical: 50, marginBottom: 130}}>
          <TouchableOpacity
            onPress={onInfarmationPress}
            style={styles.applicationBox}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <NoteeIcon style={{marginVertical: 40}} />
              <View>
                <Text style={styles.applicationText}>Информация</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onNotificationPress}
            style={styles.applicationBox}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 10,
                justifyContent: 'space-between',
              }}>
              <BellIcon
                style={{
                  marginVertical: 40,
				  left: 20
                }}
              />
              <View>
                <Text style={styles.applicationText}>Уведомления (1)</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onCancelonPress}
            style={styles.applicationBox}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 10,
                justifyContent: 'space-between',
              }}>
              <DelitIcon
                style={{
                  marginVertical: 40,
                }}
              />
              <View>
                <Text style={styles.applicationText}>Отменить инкассацию</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.applicationBox}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 10,
                justifyContent: 'space-between',
              }}>
              <HandPhoneIcon style={{marginVertical: 40}} />
              <View>
                <Text style={styles.applicationText}>Заказать инкассацию</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Personalview;
