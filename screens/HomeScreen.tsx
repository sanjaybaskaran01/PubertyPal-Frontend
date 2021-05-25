import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import OnBoarding from "../components/OnBoarding";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Smiley from "../components/Smiley";


export default function HomeScreen() {
  const [Pressed,setPressed]=useState(false);
  const navigation=useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  
  const onPubertyPress =()=>{
    setPressed(true);
    navigation.navigate('Puberty')
  }
  const onSDAPress=()=>{
    navigation.navigate("Sda")
  }
  return (
    <View style={styles.container}>
        <Smiley/>
      <TouchableHighlight onPress={onPubertyPress} style={styles.Button} >

        <View style={styles.Button} >
          <Text style={styles.title}>Understanding Puberty</Text>
        </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onSDAPress} style={styles.Button}>
      <View style={styles.Button}>
        <Text style={styles.title}>Small Doable Actions</Text>
      </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"white",

  },
  // #81BCBB
  Button: {
    backgroundColor: "gray",
    margin: 10,
    width: 225,
    height: 75,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonPressed:{
    backgroundColor:"#81BCBB"

  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
