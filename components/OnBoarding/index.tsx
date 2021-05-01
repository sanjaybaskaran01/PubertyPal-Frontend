import React from 'react'
import { FlatList, Text, View } from 'react-native';
import styles from './styles'
import slides from '.././Data/onboardingslide'
import OnBoardingItem from '../OnBoardingItem'
const OnBoarding=()=>{

    return(
        <View>
            <FlatList
            data={slides}
            renderItem={({item})=><OnBoardingItem item={item}/>
            />
        </View>

    );
}

export default OnBoarding