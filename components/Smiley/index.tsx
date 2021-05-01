import React from  'react'
import { View,Image, Text} from 'react-native'
import styles from './styles'
import Icon from './something'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'

const Smiley=()=>{
    // const navigation=useNavigation();
    // const onPress=()=>{
    //     navigation.navigate('HomeScreen')
    
    //   }
    
    return(
    <View style={styles.container}>
        <TouchableHighlight>
        <Image source={require('../../assets/images/smileyface.png')} style={styles.containerimage}/>
        </TouchableHighlight>
    </View>
    )
}

export default Smiley