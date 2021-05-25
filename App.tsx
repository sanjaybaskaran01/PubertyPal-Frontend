import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Smiley from './components/Smiley'
import OnBoarding from './components/OnBoarding'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View } from 'react-native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [viewedOnboard,setViewedOnboard]=useState(false);
  const checkOnboarding=async()=>{
    try{
      const value=await AsyncStorage.getItem('@viewedOnboarding');
      if (value!==null){
        setViewedOnboard(true)
      }}catch(err){
       console.log('error @checkonboarding',err) 
      }
  }

  useEffect(()=>{
    checkOnboarding();
  },[])
  if (!isLoadingComplete) {
    return null;
  } else {
    
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar hidden={true}/>
        
        
      </SafeAreaProvider>
    
    );
  }
}
