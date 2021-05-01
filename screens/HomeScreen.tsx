import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";


export default function HomeScreen() {
  const navigation=useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);
  
  const onPubertyPress =()=>{
    navigation.navigate('Puberty')
  }
  const onSDAPress=()=>{
    navigation.navigate("Sda")
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPubertyPress}>

        <View style={styles.Button}>
          <Text style={styles.title}>Understanding Puberty</Text>
        </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onSDAPress}>
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
  Button: {
    backgroundColor: "#8CD5B7",
    margin: 10,
    width: 225,
    height: 75,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});
