import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements/dist/overlay/Overlay";

export default function Loading(props){
    const {visible , texto} = props


    return(
        <Overlay
         isVisible={visible}
         windowBackgroundColor="rgba(0,0,0,0.5)"
         overlayBackgroundColor="transparente"
         overlayStyle={style.Overlay}>
            <View style={style.view}>
        <ActivityIndicator size="large" color="#00a688">
            {texto && <Text style={style.text}>{texto}</Text>}
        </ActivityIndicator>


            </View>
        </Overlay>

    )
}

const style=StyleSheet.create({
    Overlay:{
        height: 100,
        width: 200,
        backgroundColor:"#fff",
        borderColor:"#00a688",
        borderWidth:2,
        borderRadius:10,
     },
     view:{
         flex:1,
         alignItems:"center",
         justifyContent:"center"
     },
     text:{
         color:"#00a680",
         textTransform:"uppercase",
         marginTop:10,

     }
})