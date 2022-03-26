import {DrawerActions, useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const DrawerPage = () => {
  let navigation = useNavigation();
  let toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity onPress={toggleDrawer}>
          <Text>sdsdsd</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default DrawerPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
