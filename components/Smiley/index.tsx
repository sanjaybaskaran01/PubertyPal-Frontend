import React from  'react'
import { View,Image, Text} from 'react-native'
import styles from './styles'
import Icon from './something'
import { TouchableHighlight } from 'react-native-gesture-handler'

const Smiley=()=>{
    // const onPress=()=>{
    //     navigation.navigate('AlbumScreen',{id:props.album.id})
    
    //   }
    
    return(
    <View style={styles.container}>
        <TouchableHighlight >
        <Image source={require('../../assets/images/smileyface.png')} style={styles.containerimage}/>
        </TouchableHighlight>
    </View>
    )
}

export default Smiley