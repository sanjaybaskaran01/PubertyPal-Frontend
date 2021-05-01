import React from 'react'
import { View, Text,Image,useWindowDimensions } from 'react-native'
import styles from './styles'


export default function OnBoardingItem({item}) {
    const {width}=useWindowDimensions();
    return (
        <View>
            <Image source={item.image} style={[styles.image,{width,resizeMode:'contain'}]}/>
            <View style={{flex:0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>

            </View>
        </View>
    )
}


