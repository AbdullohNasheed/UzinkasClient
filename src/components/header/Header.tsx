import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {
  BellIcoon,
  LeftIcon,
  MenuIcon,
  RingIcon,
} from '../../assets/icons/icons';
import {ROUTES} from '../../navigation/ROUTES';

export interface HeaderComponentProps {
  text?: string;
  hasMenu?: boolean;
  hasMenuOne?: boolean;
  style?: StyleProp<ViewStyle>;
}
const HeaderComponent = ({
  hasMenu = false,
  hasMenuOne = true,
  text,
}: HeaderComponentProps) => {
  const navigation = useNavigation();
  let toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  let onNotificationPress = () => {
    navigation.navigate(ROUTES.NOTIFICATION);
  };
  let onBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.headerContainer}>
      {hasMenuOne ? (
        <Image
          source={require('../../assets/image/inkass2.png')}
          style={styles.image}
        />
      ) : (
        <TouchableOpacity onPress={onBackPress}>
          <LeftIcon />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{text}</Text>
      {hasMenu ? (
        <Image
          source={require('../../assets/image/inkass2.png')}
          style={styles.image}
        />
      ) : (
        <TouchableOpacity onPress={onNotificationPress}>
          <RingIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 25,
  },
  image: {
    width: 40,
    height: 45,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginVertical: 30,
  },
});

export default HeaderComponent;
