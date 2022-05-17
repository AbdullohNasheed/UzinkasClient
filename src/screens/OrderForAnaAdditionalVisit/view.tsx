import {View, Text} from 'react-native';
import React from 'react';
import {style} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderComponent from '../../components/header/Header';
import DefaultButton from '../../components/general/DefaultButton';
import {OrderAdditionalHook} from './hooks';

const OrderAdditionalForVisit = () => {
  const {onBekPress, oneComparativePress} = OrderAdditionalHook();
  return (
    <View style={style.container}>
      <SafeAreaView>
        <HeaderComponent hasMenuOne={false} text="Заказ на доп.визит" />
      </SafeAreaView>
      <View style={style.containerOne}>
        <View style={{height: '70%'}}>
          <View style={{height: '80%', justifyContent: 'space-between'}}>
            <View>
              <View style={{alignItems: 'center', marginBottom: 10,}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'red',
                    fontWeight: '500',
                    paddingHorizontal: 70,
                    textAlign: 'center',
                  }}>
                  Стоимость внепланового посещения
                </Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{fontSize: 45, fontWeight: '700', color: '#fff'}}>
                  1.000.000
                </Text>
                <Text
                  style={{
                    fontSize: 45,
                    fontWeight: '700',
                    color: '#fff',
                    marginLeft: 6,
                  }}>
                  сум
                </Text>
              </View>
            </View>
            <View>
              <DefaultButton onPress={oneComparativePress} text="Подтвердить" />
              <DefaultButton onPress={onBekPress} text="Отмена" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderAdditionalForVisit;
