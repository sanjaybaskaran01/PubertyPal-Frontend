import { StyleSheet } from "react-native";


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    image:{
        flex:0.3,
        justifyContent:'center'
    },
    title:{
        fontWeight:'800',
        fontSize:28,
        marginBottom:5,
        color:'#8CD5B7',
        textAlign:'center'
    },
    description:{
        fontWeight:'800',
        color:'#2C2940',
        textAlign:'center',
        paddingHorizontal:30,
    }
})

export default styles