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
  BorderIcon,
  DelitIcon,
  HandPhoneIcon,
  MenuIcon,
  NoteeIcon,
} from '../../assets/icons/icons';
import HeaderComponent from '../../components/header/Header';
import {usePersonalScreenHook} from './hooks';
import {styles} from './style';
let {
  onInfarmationPress,
  onNotificationPress,
  onCancelonPress,
  onToOrderPress,
  onMyOrdersPress,
} = usePersonalScreenHook();
const PersonalView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderComponent text={'Личный кабинет'} />
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={{marginBottom: 180}}>
            <TouchableOpacity onPress={onInfarmationPress} style={styles.box}>
              <View style={styles.boxOne}>
                <NoteeIcon style={{marginRight: 10}} />
              </View>
              <View style={styles.boxTwo}>
                <Text style={styles.text}>Информация</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onNotificationPress} style={styles.box}>
              <View style={styles.boxOne}>
                <BellIcon />
              </View>
              <View style={styles.boxTwo}>
                <Text style={styles.text}>Уведомления (1)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancelonPress} style={styles.box}>
              <View style={styles.boxOne}>
                <DelitIcon />
              </View>
              <View style={styles.boxTwo}>
                <Text style={styles.text}>Отменить инкассацию</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onToOrderPress} style={styles.box}>
              <View style={styles.boxOne}>
                <HandPhoneIcon />
              </View>
              <View style={styles.boxTwo}>
                <Text style={styles.text}>Заказать инкассацию</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onMyOrdersPress} style={styles.box}>
              <View style={styles.boxOne}>
                <BorderIcon />
              </View>
              <View style={styles.boxTwo}>
                <Text style={styles.text}>Мои заказы</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PersonalView;
