import React from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DefaultButton from '../../components/general/DefaultButton'
import DefaultImageBackground from '../../components/general/DefaultImageBackground'
import { styles } from './style'

const QrKodview = () => {
	return (
		<DefaultImageBackground>
			<SafeAreaView>
				<View style={styles.container}>
					<Image style={styles.image} source={require('../../assets/image/inakass3.png')}/>
					<View style={styles.qrKodBox}>
						<Image source={require("../../assets/image/qrkod.png")}/>
					</View>
				</View>
				<View style={styles.bottonBox}>
					<DefaultButton text={'Сохранить'}/>
					<DefaultButton text={'Отмена'}/>
				</View>
			</SafeAreaView>
		</DefaultImageBackground>
	)
}

export default QrKodview
