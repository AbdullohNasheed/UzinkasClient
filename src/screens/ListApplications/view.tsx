import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { requests } from '../../api/requests';
import HeaderComponent from '../../components/header/Header';
import ListApp from './components/listApp';
import ListAppOne from './components/listAppOne';
import ListAppThree from './components/listAppThree';
import ListAppTwo from './components/listAppTwo';
import { useActsHook } from './hooks';
import { styles } from './styles';

const ListApplications = () => {
  const { acts } = useActsHook();

  return (
    <View style={styles.container}>
      <HeaderComponent
        hasMenuOne={false}
        hasMenu={true}
        text="Список заявок"
      />
      <ScrollView style={{ marginBottom: 80 }} >
        {acts.map(e => {
          console.log({ e });

          return <View style={styles.components}>
            <ListApp {...e} />
          </View>
        })}
      </ScrollView>
    </View >
  );
};

export default ListApplications;
