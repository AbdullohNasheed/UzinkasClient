import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const ListAppOne = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.boxOne}>
        <View style={styles.boxInner}>
          <Text style={styles.textOne}>От: </Text>
          <Text style={styles.textOne}> 15 январь</Text>
        </View>
        <View style={{marginVertical: 6}} />
        <View style={styles.boxInnerOne}>
          <Text style={styles.textOne}>До: </Text>
          <Text style={styles.textOne}> 23 январь</Text>
        </View>
      </View>
      <View style={styles.boxTwo}>
        <View>
          <Text style={styles.textOne}>Статус:</Text>
        </View>
        <View style={{marginVertical: 6}} />
        <View>
          <Text style={styles.textTwo}>Отправлено на почту</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListAppOne;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#2b2c36',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.37,
    shadowRadius: 5.49,

    elevation: 5,
  },
  boxOne: {
    flex: 1,
    paddingVertical: 20,
    borderRightWidth: 1,
    paddingHorizontal: 20,
    borderColor: '#5A5A5A',
  },
  boxTwo: {
    paddingVertical: 15,
    flex: 1,
    paddingHorizontal: 10,
  },
  boxInner: {
    flexDirection: 'row',
  },
  boxInnerOne: {
    flexDirection: 'row',
  },
  textOne: {
    fontSize: 19,
    color: '#fff',
    fontWeight: '500',
  },
  textTwo: {
    color: '#009899',
    fontSize: 19,
    fontWeight: 'bold',
  },
});
