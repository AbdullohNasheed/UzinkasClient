import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Image } from 'react-native-svg'
import { MenuIcon, TrackIcon, TrackTwoIcon } from '../../assets/icons/icons'
import DefaultButton from '../../components/general/DefaultButton'
import HeaderComponent from '../../components/header/Header'
import { usesOrderScreenHook, useToOrderScreenHook } from './hooks'
import { styles } from './style'
let {onOrderPress, onAdditionalPress} = usesOrderScreenHook();
const ToOrderview = () => {
    return (
        <SafeAreaView style={styles.container}>
          <HeaderComponent text={"Заказать"}/>
          <View style={styles.toOrderContainer}>
              <View style={styles.trackBox}>
                  <TrackTwoIcon style={styles.icon}/>
              </View>
              <DefaultButton onPress={onOrderPress} text={'По плану'}/>
              <DefaultButton onPress={onAdditionalPress} text={'Заказать доп. визит'}/>
          </View>
        </SafeAreaView>
    )
}

export default ToOrderview