import React from 'react'
import { View, Text, ImageBackgroundBase, ImageBackground, Image } from 'react-native'
import DefaultImageBackground from '../../components/general/DefaultImageBackground'
import { styles } from './style'

const Homeview = () => {
    return (
       <ImageBackground
        style={styles.background}
        source={require("../../assets/image/x-11.png")}
        imageStyle={styles.image}
        >
            {/* <Image style={styles.inkassImage} source={require('../../assets/image/inkass1.png')}/> */}
       </ImageBackground>
    )
}

export default Homeview
