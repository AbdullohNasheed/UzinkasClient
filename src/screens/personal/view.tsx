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
  IconHistory,
  KalendarBigIcon,
  KalendarIcon,
  MenuIcon,
  NoteeIcon,
} from '../../assets/icons/icons';
import HeaderComponent from '../../components/header/Header';
import {usePersonalScreenHook} from './hooks';
import {styles} from './style';
const PersonalView = () => {
  let {onMyOrderPress, onToOrderPress, onListApplicationsPress, user} =
    usePersonalScreenHook();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderComponent hasMenuOne text={'Личный кабинет'} />
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={{marginBottom: 180}}>
            <View style={styles.boxx}>
              <Text style={styles.textOne}>{user.user?.name}</Text>
              <Text style={styles.textOne}>{user.user?.tariff.name}</Text>
            </View>
            <TouchableOpacity onPress={onMyOrderPress} style={styles.box}>
              <View style={styles.boxOne}>
                <KalendarBigIcon />
              </View>
              <View style={styles.boxTwo}>
                <Text style={styles.text}>История платежей</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onListApplicationsPress}
              style={styles.box}>
              <View style={styles.boxOne}>
                <BorderIcon />
              </View>
              <View style={styles.boxTwo}>
                <Text style={styles.text}>Мои заявки</Text>
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
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PersonalView;
