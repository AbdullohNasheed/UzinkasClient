import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {statuses} from '../../screens/myOrders/components/activeBox/components/myOrder/view';
import {normalizePrice} from '../../utils/string';
import QRCode from 'react-native-qrcode-svg';

const History = ({orderHistory}) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxOne}>
        <View style={styles.flexOne}>
          <View style={styles.historyBox}>
            <Text style={styles.textOne}>11 сентября</Text>
          </View>
          <View style={styles.historyBox}>
            <Text style={styles.textOne}>Статус:</Text>
            <Text style={styles.textTwo}>{statuses[orderHistory?.status]}</Text>
          </View>
        </View>
        <View style={styles.flexTwo}>
          <View style={styles.historyBox}>
            <Text style={styles.textOne}>Кол-во посещений</Text>
          </View>
          <View style={styles.historyBoxOne}>
            <View style={styles.box}>
              <Text style={styles.textThree}>Режали</Text>
              <Text style={styles.textOne}>4</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.textThree}>Кушимча</Text>
              <Text style={styles.textOne}>0</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.boxTwo}>
        <Text style={styles.textName}>Сумма</Text>
        <Text style={styles.textNumber}>
          {normalizePrice(orderHistory?.amount)}
        </Text>
      </View>
      <View style={styles.one}>
        <View style={styles.flexTwo}>
          <View style={styles.historyBox}>
            <Text style={styles.textOne}>Ташрифлар сони</Text>
          </View>
          <View style={styles.historyBoxOne}>
            <View style={styles.box}>
              <Text style={styles.textThree}>Катьий</Text>
              <Text style={styles.textOne}>
                {normalizePrice('50000000000')}
              </Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.textThree}>%</Text>
              <Text style={styles.textOne}>{normalizePrice('66500')}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.boxTwo}>
        <Text style={styles.textName}>Тулов суммаси</Text>
        <Text style={styles.textNumber}>
          {normalizePrice(orderHistory?.amount)}
        </Text>
      </View>
      <View style={styles.boxTwo}>
        <Text style={styles.text}>Инкассатор</Text>
        <Text style={styles.Text}>{orderHistory?.client?.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <QRCode size={80} value={orderHistory?.hash} />
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#rgba(0, 152, 153, 1)',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: '#rgba(38, 39, 50, 1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  boxOne: {
    borderBottomWidth: 1,
    borderColor: '#434343',
  },
  flexOne: {
    flex: 1,
    paddingVertical: 20,
  },
  flexTwo: {
    flex: 1,
  },
  historyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  historyBoxOne: {
    paddingVertical: 15,
    flexDirection: 'row',
    marginHorizontal: 40,
    justifyContent: 'space-between',
  },
  textOne: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  textTwo: {
    color: '#rgba(0, 152, 153, 1)',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textThree: {
    fontSize: 16,
    color: '#rgba(182, 182, 182, 1)',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTwo: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#434343',
    paddingVertical: 15,
  },
  textName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  textNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  one: {
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: '#434343',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  Text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#rgba(0, 152, 153, 1)',
    marginTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  image: {
    width: 160,
    height: 160,
  },
});
