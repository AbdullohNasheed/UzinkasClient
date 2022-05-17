import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderComponent from '../../components/header/Header';
import ListApp from './components/listApp';
import ListAppOne from './components/listAppOne';
import ListAppTwo from './components/listAppTwo';
import ListAppThree from './components/listAppThree';

const ListApplications = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComponent
          hasMenuOne={false}
          hasMenu={true}
          text="Список заявок"
        />
        <ScrollView style={{width: '100%', height: '100%'}}>
          <View style={{paddingVertical: 20}}>
            <View style={styles.components}>
              <ListApp />
            </View>
            <View style={styles.components}>
              <ListAppOne />
            </View>
            <View style={styles.components}>
              <ListAppTwo />
            </View>
            <View style={styles.components}>
              <ListAppThree />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ListApplications;
