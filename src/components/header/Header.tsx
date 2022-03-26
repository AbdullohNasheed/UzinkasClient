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
import {BellIcoon, MenuIcon} from '../../assets/icons/icons';

export interface HeaderComponentProps {
  text: string;
  hasMenu?: boolean;
  style?: StyleProp<ViewStyle>;
}
const HeaderComponent = ({hasMenu=false,text}: HeaderComponentProps) => {
  const navigation = useNavigation();
  let toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
    let onBackPress = () => {
      navigation.goBack();
    };
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../assets/image/inkass2.png')}
        style={styles.image}
      />
      <Text style={styles.text}>{text}</Text>
      {hasMenu ? (
        <TouchableOpacity onPress={onBackPress}>
          <BellIcoon />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={toggleDrawer}>
          <MenuIcon />
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
