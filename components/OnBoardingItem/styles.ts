import { StyleSheet } from "react-native";


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    image:{
        flex:0.7,
        justifyContent:'center'
    },
    title:{
        fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        color:'black',
        textAlign:'center'
    },
    description:{
        fontWeight:'800',
        color:'black',
        textAlign:'center',
        paddingHorizontal:64,
    }
})

export default styles