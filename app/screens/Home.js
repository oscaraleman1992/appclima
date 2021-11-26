import React from "react"
import {View,Text,StyleSheet,TextInput,TouchableHighlight, ScrollView} from "react-native"
import { useNavigation } from "@react-navigation/core"

export default function Home(){
    return(
        <View style={styles.contenedor}>
        
            <Text styles={styles.text}>
               AppClima 
            </Text>
           
        </View>
    )
}

const styles=StyleSheet.create({
    contenedor:{
        background:'black',
        minHeight:'100%'
    },

    text:{
        color:'blue',
        fontSize: 20,
    }
    
})


