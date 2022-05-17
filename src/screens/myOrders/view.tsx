import {useNavigation} from '@react-navigation/native';
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
  LayoutAnimation,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {DataWhiteIcon} from '../../assets/icons/icons';
import CalendarBox from '../../components/header/Calaendar';
import HeaderComponent from '../../components/header/Header';
import {ActiveBoxScreen} from './components/activeBox';
import {HistoryBoxScreen} from './components/historyBox';
import {HistoryButtonBoxScreen} from './components/historyBox/components/historyButton';
import {useActiveData, useHistoryData} from './hooks';
import {styles} from './style';

const {width} = Dimensions.get('window');

export function MyOrdersView() {
  let navigation = useNavigation();
  // const onCalendarPress = () => {
  //   navigation.navigate(ROUTES.);
  // };
  const {order, loading} = useActiveData();
  const {orderHistory, loadingOne} = useHistoryData();
  const [animated, setAnimated] = useState(true);

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
        <HeaderComponent hasMenuOne={false} text={'Мои заказы'} />
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
              <TouchableOpacity
                style={styles.dataBox}
                onPress={() => {
                  LayoutAnimation.configureNext(
                    LayoutAnimation.Presets.easeInEaseOut,
                  );
                  setAnimated(!animated);
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                    Выбрать дату
                  </Text>
                  <DataWhiteIcon />
                </View>
                {!animated ? (
                  <View style={{}}>
                    <CalendarBox />
                  </View>
                ) : null}
              </TouchableOpacity>
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
