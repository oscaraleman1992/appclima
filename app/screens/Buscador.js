import React from "react";

import {View,Text,StyleSheet,TextInput,TouchableHighlight, ScrollView} from "react-native"
import { useNavigation } from "@react-navigation/core"
const appi = {
    key : "a264e96e916710a27a0d1f1df6422fbb",
    base: "https://api.openweathermap.org/data/2.5"
}


export default function Buscador(){
    const navigation=useNavigation();
    return(
            <View >
                <div styles={styles.container}>
                    <TextInput style={styles.input} placeholder="buscador"/>
                </div>
            </View>

    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#4093CE",
        paddingLeft:15,
        paddingRight:15,
    },

    input:{
        backgroundColor: "#FFFF",
        marginTop:10,
        marginLeft:10,
        borderRadius:10.5,
        display: 'block',
        width: '95%',
        padding: 20
    }
})