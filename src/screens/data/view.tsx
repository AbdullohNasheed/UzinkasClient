import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {KalendarMiniIcon} from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import DefaultImageBackground from '../../components/general/DefaultImageBackground';
import HeaderComponent from '../../components/header/Header';
import { usePersonalScreenHook } from '../personal/hooks';
import { useDataScreenHook } from './hooks';
import {styles} from './style';
let { onToOrderPress,} = useDataScreenHook();
const Dataview = () => {
  return (
    <DefaultImageBackground>
      <HeaderComponent text={'История платежей'} />
      <ScrollView style={styles.container}>
        <View style={{marginBottom: 130}}>
          <View style={styles.dataContainer}>
            <TouchableOpacity style={styles.inputBox}>
              <View style={styles.dataBox}>
                <Text style={styles.dataText}>Сентябрь 2021</Text>
                <View style={styles.kalendarbox}>
                  <KalendarMiniIcon style={{marginBottom: 5}} />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.footer}>
              <View style={{marginVertical: 40}}>
                <View style={styles.monthContainer}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.monthText}>Март</Text>
                    <Text style={styles.textOne}>Ташрифлар сони</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 5,
                      borderBottomWidth: 1,
                      borderColor: '#242531',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        marginVertical: 8,
                      }}>
                      <Text style={styles.textName}>Режали</Text>
                      <Text style={styles.textNuber}>4</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        marginVertical: 8,
                      }}>
                      <Text style={styles.textName}>Кушимча</Text>
                      <Text style={styles.textNuber}>0</Text>
                    </View>
                  </View>
                  <View style={styles.MonyContainer}>
                    <Text style={styles.textMony}>Сумма</Text>
                    <Text style={styles.textMonyNumber}>2 500 000</Text>
                  </View>
                </View>
                <View style={styles.monthContainer}>
                  <View style={{alignItems: 'center'}}>
                    {/* <Text style={styles.monthText}>Март</Text> */}
                    <Text style={styles.textThree}>Тариф режаси</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 5,
                      borderBottomWidth: 1,
                      borderColor: '#242531',
                    }}>
                    <View
                      style={{flex: 1, alignItems: 'center', marginBottom: 10}}>
                      <Text style={styles.textName}>Катьий</Text>
                      <Text style={styles.textNuber}>100 000</Text>
                    </View>
                    <View
                      style={{flex: 1, alignItems: 'center', marginBottom: 10}}>
                      <Text style={styles.textName}>%</Text>
                      <Text style={styles.textNuber}>66 500</Text>
                    </View>
                  </View>
                  <View style={styles.MonyContainer}>
                    <Text style={styles.textMony}>Сумма</Text>
                    <Text style={styles.textMonyNumber}>2 500 000</Text>
                  </View>
                </View>
                <View style={styles.monthContainer}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.monthText}>Апрель</Text>
                    <Text style={styles.textOne}>Ташрифлар сони</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 5,
                      borderBottomWidth: 1,
                      borderColor: '#242531',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        marginVertical: 8,
                      }}>
                      <Text style={styles.textName}>Режали</Text>
                      <Text style={styles.textNuber}>4</Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        marginVertical: 8,
                      }}>
                      <Text style={styles.textName}>Кушимча</Text>
                      <Text style={styles.textNuber}>0</Text>
                    </View>
                  </View>
                  <View style={styles.MonyContainer}>
                    <Text style={styles.textMony}>Сумма</Text>
                    <Text style={styles.textMonyNumber}>2 500 000</Text>
                  </View>
                </View>
                <View style={styles.monthContainer}>
                  <View style={{alignItems: 'center'}}>
                    {/* <Text style={styles.monthText}>Март</Text> */}
                    <Text style={styles.textThree}>Тариф режаси</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 5,
                      borderBottomWidth: 1,
                      borderColor: '#242531',
                    }}>
                    <View
                      style={{flex: 1, alignItems: 'center', marginBottom: 10}}>
                      <Text style={styles.textName}>Катьий</Text>
                      <Text style={styles.textNuber}>100 000</Text>
                    </View>
                    <View
                      style={{flex: 1, alignItems: 'center', marginBottom: 10}}>
                      <Text style={styles.textName}>%</Text>
                      <Text style={styles.textNuber}>66 500</Text>
                    </View>
                  </View>
                  <View style={styles.MonyContainer}>
                    <Text style={styles.textMony}>Сумма</Text>
                    <Text style={styles.textMonyNumber}>2 500 000</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bottonContainer}>
              <DefaultButton onPress={onToOrderPress} text={'Заказать сравнительный акт'} />
              <DefaultButton text={'Позвонить'} />
            </View>
          </View>
        </View>
      </ScrollView>
    </DefaultImageBackground>
  );
};

export default Dataview;
