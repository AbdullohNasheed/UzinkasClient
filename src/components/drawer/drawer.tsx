import React, {useEffect, useState} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  LayoutAnimation,
} from 'react-native';
import {ExtIcon, Xicon} from '../../assets/icons/icons';
import {ROUTES} from '../../navigation/ROUTES';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../App';
import {useInformationScreenHook} from '../../screens/information/hooks';
import {selectUser, userLoggedOut} from '../../store/slices/userSlice';
import {requests} from '../../api/requests';


const DrawerPage = () => {
  let user = useSelector(selectUser);
  const [shouldShow, setShouldShow] = useState(true);
  let navigation = useNavigation();
  let code = useSelector((e: RootState) => e.user.pinCode);
  let PinkCod = () => {
    navigation.navigate(ROUTES.PINCODE, {type: 'setup'});
  };
  let toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  let changePin = () => {
    navigation.navigate(ROUTES.PINCODE, {type: 'change'});
  };

  return (
    <SafeAreaView>
      <View style={styles.imageContainer}>
        <View>
          <Image
            style={styles.image}
            source={require('../../assets/image/inakass3.png')}
          />
        </View>
        <Text style={styles.textSiting}>настройка</Text>
        <TouchableOpacity onPress={toggleDrawer}>
          <Xicon />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{marginVertical: 20}}>
          <TouchableOpacity
            style={styles.extBottom}
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut,
              );
              setShouldShow(!shouldShow);
            }}>
            <Text style={styles.textSiting}>Parol</Text>
          </TouchableOpacity>
          <View style={styles.ParolBottom}>
            {!shouldShow ? (
              <View style={{borderRadius: 10}}>
                <TouchableOpacity onPress={PinkCod} style={styles.parolBox}>
                  <Text style={{color: '#000'}}>
                    {!!code ? 'Remove pin' : 'Setup pin'}
                  </Text>
                </TouchableOpacity>
                {!!code && (
                  <TouchableOpacity onPress={changePin} style={styles.parolBox}>
                    <Text style={{color: '#000'}}>Change pin code</Text>
                  </TouchableOpacity>
                )}
              </View>
            ) : null}
          </View>
        </View>
      </View>
      <View style={styles.containerOne}>
        <TouchableOpacity style={styles.extBottom}>
          <View>
            <Text style={styles.textSiting}>{user.user?.name}</Text>
          </View>
          <View>
            <ExtIcon />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DrawerPage;

const styles = StyleSheet.create({
  container: {
    height: '75%',
  },
  containerOne: {
    height: '25%',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingTop: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
  textSiting: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  extBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    backgroundColor: 'rgba(24, 25, 38, 1)',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  ParolBottom: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  parolBox: {
    marginVertical: 10,
    borderRadius: 10,
  },
});
