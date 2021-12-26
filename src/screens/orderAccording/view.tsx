import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { CircleIcon, KalendarIcon, KalendarMiniIcon, MonyIcon } from '../../assets/icons/icons'
import DefaultButton from '../../components/general/DefaultButton'
import DefaultInput from '../../components/general/DefaultInput'
import InputBlack from '../../components/general/InputBlack'
import HeaderComponent from '../../components/header/Header'
import { useQrkodScreenHook } from './hooks'
import { styles } from './style'
let { onQrKodPress } = useQrkodScreenHook();
const OrderAccordingview = () => {
    return (
        <SafeAreaView style={styles.container}>
           <HeaderComponent text={"Заказать по плану"}/>
           <View style={styles.orderAccording}>
               <View style={styles.inputContainer}>
                   <Text style={styles.text}>Дата</Text>
                  <InputBlack icon={KalendarMiniIcon} placeholder={'01.12'}/>
                  <Text style={styles.text}>Сумма денег, подлежающая перечислению</Text>
                  <InputBlack icon={MonyIcon} placeholder={'Сумма'}/>
                  <Text style={styles.text}>Код ракамлари</Text>
                  <InputBlack icon={CircleIcon} placeholder={'Код'}/>
                  <View style={styles.bottonBox}>
                      <DefaultButton onPress={onQrKodPress} text={'Генерация QR-кода'}/>
                  </View>
               </View>
           </View>
        </SafeAreaView>
    )
}

export default OrderAccordingview
