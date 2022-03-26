import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
  ScrollView,
  Dimensions,
  TouchableOpacityBase,
  FlatList,
} from 'react-native';
import {ActivityIndicator, Modal} from 'react-native-paper';
import {MyOrdersScreen} from '.';
import HeaderComponent from '../../components/header/Header';
import {ActiveBoxScreen} from './components/activeBox';
import {MyOrderScreen} from './components/activeBox/components/myOrder';
import {HistoryBoxScreen} from './components/historyBox';
import {HistoryViewScreen} from './components/historyBox/components/history';
import {HistoryButtonBoxScreen} from './components/historyBox/components/historyButton';
import {useActiveData, useHistoryData} from './hooks';
import {styles} from './style';

const {width} = Dimensions.get('window');

export function MyOrdersView() {
  const {order, loading} = useActiveData();
  const {orderHistory, loadingOne} = useHistoryData();

  const [state, setState] = useState({
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000,
  });

  let {
    xTabOne,
    xTabTwo,
    translateX,
    active,
    translateXTabTwo,
    translateXTabOne,
    translateY,
  } = state;

  let handleSlide = (type: number) => {
    let {
      active,
      translateX,
      xTabOne,
      xTabTwo,
      translateXTabTwo,
      translateXTabOne,
    } = state;
    Animated.spring(translateX, {
      toValue: type,
      useNativeDriver: true,
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: width,
          useNativeDriver: true,
        }),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };
  useEffect(() => {
    handleSlide(xTabOne);
  }, [state.active]);

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(36, 37, 49, 1)'}}>
      <View style={styles.headerBox}>
        <HeaderComponent  text={'Мои заказы'} />
      </View>
      <View style={styles.container}>
        <Animated.View
          style={{
            transform: [
              {
                translateX,
              },
            ],
          }}
        />
        <View style={styles.styleOne}>
          <TouchableOpacity
            style={styles.buttonBox}
            onLayout={event =>
              setState({...state, xTabOne: event.nativeEvent.layout.x})
            }
            onPress={() => setState({...state, active: 0})}>
            <Text
              style={{
                color: active === 0 ? '#rgba(0, 152, 153, 1)' : '#fff',
                fontWeight: 'bold',
              }}>
              Активные
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBoxTwo}
            onLayout={event =>
              setState({...state, xTabTwo: event.nativeEvent.layout.x})
            }
            onPress={() => setState({...state, active: 1})}>
            <Text
              style={{
                color: active === 0 ? '#fff' : '#rgba(0, 152, 153, 1)',
                fontWeight: 'bold',
              }}>
              История
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scrollContainer}>
          <ScrollView style={{flex: 1}}>
            <Animated.View
              style={{
                marginTop: 25,
                paddingBottom: 150,
                transform: [
                  {
                    translateX: translateXTabOne,
                  },
                ],
              }}
              onLayout={event =>
                setState({
                  ...state,
                  translateY: event.nativeEvent.layout.height,
                })
              }>
              {loading && (
                <ActivityIndicator
                  size={'large'}
                  color="rgba(0, 152, 153, 1)"
                />
              )}
              {order?.map(e => {
                return <ActiveBoxScreen order={e} />;
              })}
            </Animated.View>
            <Animated.View
              style={{
                transform: [
                  {
                    translateX: translateXTabTwo,
                  },
                  {
                    translateY: -translateY,
                  },
                ],
              }}>
              {loadingOne && (
                <ActivityIndicator
                  size={'large'}
                  color="rgba(0, 152, 153, 1)"
                />
              )}
              {orderHistory?.map(e => {
                return <HistoryButtonBoxScreen orderHistory={e} />;
              })}
              <HistoryBoxScreen />
            </Animated.View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default MyOrdersView;
