import React from 'react'
import { View, Text,Image,useWindowDimensions } from 'react-native'
import styles from ''

export default function OnBoardingItem({item}) {
    const {width}=useWindowDimensions();
    return (
        <View>
            <Image source={item.image} style={[styles.image,{width,resizeMode:'contain'}]}/>
        </View>
    )
}


