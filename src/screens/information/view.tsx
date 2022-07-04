import dayjs from 'dayjs';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {
  BankIcon,
  CarbonIcon,
  GoldIcon,
  KalendarIcon,
  LoremIcon,
  PhoneIcon,
  TrackIcon,
} from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import HeaderComponent from '../../components/header/Header';
import {useInformationScreenHook} from './hooks';
import {styles} from './style';
const Informationview = () => {
  const {
    user,
    modalVisible,
    toggleVisibleModal,
    setModalVisible,
    onLogoutPress,
  } = useInformationScreenHook();

  console.log(user.user,"THIS IS USER");

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent hasMenuOne={false} hasMenu={false} text={'Профиль'} />
      <ScrollView
        contentContainerStyle={{paddingBottom: 60}}
        style={styles.informationContainer}>
        <View style={{marginVertical: 40, paddingBottom: 0}}>
          <TouchableOpacity>
            <View style={styles.informationBox}>
              <View style={styles.iconContainer}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../assets/image/building.png')}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textOne}>{user.user?.name}</Text>
                <Text style={styles.textTwo}>Название орг.</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.informationBox}>
              <View style={styles.iconContainer}>
                <CarbonIcon />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textOne}>{user.user?.inn}</Text>
                <Text style={styles.textTwo}>ИНН</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            {/* <View style={styles.informationBox}>
              <View style={styles.iconContainer}>
                <PhoneIcon />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textOne}>?</Text>
                <Text style={styles.textTwo}>Контактный номер</Text>
              </View>
            </View> */}
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.informationBox}>
              <View style={styles.iconContainer}>
                <KalendarIcon />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textOne}>{dayjs(user.user?.date).format("DD-MM-YYYY")}</Text>
                <Text style={styles.textTwo}>Дата заключения контракта</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            {/* <View style={styles.informationBox}>
              <View style={styles.iconContainer}>
                <TrackIcon />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textOne}>{user.user?.routes.route}</Text>
                <Text style={styles.textTwo}>Номер маршрута</Text>
              </View>
            </View> */}
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.informationBox}>
              <View style={styles.iconContainer}>
                <LoremIcon />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textOne}>{user.user?.tariff?.name}</Text>
                <Text style={styles.textTwo}>Тарифный план</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.informationBox}>
              <View style={styles.iconContainer}>
                <GoldIcon />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textOne}>{user.user.bag_count}</Text>
                <Text style={styles.textTwo}>Кол-во мешков</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.informationBox}>
              <View style={styles.iconContainer}>
                <BankIcon />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textOne}>{user.user?.bank.name}</Text>
                <Text style={styles.textTwo}>Обслуживающий банк</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.informationBox}>
              <View style={styles.iconContainer}>
                <BankIcon />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textOne}>{user.user?.bank.stir}</Text>
                <Text style={styles.textTwo}>Транзит банк</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.informationBox}>
              <View style={styles.iconContainer}>
                <CarbonIcon />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textOne}>{user.user?.period}</Text>
                <Text style={styles.textTwo}>План сбора ( в неделю)</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{marginVertical: 40}}>
            <DefaultButton onPress={toggleVisibleModal} text={'Выйти'} />
          </View>
          <ReactNativeModal
            backdropOpacity={0.5}
            onBackdropPress={() => toggleVisibleModal()}
            isVisible={modalVisible}>
            <View style={styles.modalContainer}>
              <View style={{height: '60%', justifyContent: 'space-between'}}>
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.modalTextOne}>
                    Вы хотите выйти из аккаунта?
                  </Text>
                </View>
                <View style={styles.modalBox}>
                  <TouchableOpacity onPress={onLogoutPress}>
                    <Text style={styles.modalTextTwo}>Да</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={styles.modalTextThree}>Нет</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ReactNativeModal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Informationview;
