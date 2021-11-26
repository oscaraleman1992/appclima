import React from "react"
import {View,Text,StyleSheet,TextInput,TouchableHighlight, ScrollView} from "react-native"
import { useNavigation } from "@react-navigation/core"

export default function Home(){
    return(
        <View style={styles.contenedor}>
            <Text style={styles.textStyle}>
                Bienvenidos a AppClima el mejor lugar donde saber el clima que tendras en la playa, así poder comer el helado tranquil@!
                Pensamos está App para aquellos usuarios que quieran disfrutar de las hermosas playas de nuestro país, y ver como estará el clima ese día.
            </Text>
            <Image style= {styles.imgStyle}
            source = {require('./img/beach.png')}></Image>
        </View>
    );
}

const styles= StyleSheet.create({
    contenedor:{
        justifyContent: 'center',
        alignItems: 'center'

    },

    textStyle:{
        alignSelf:'center',
        paddingTop: 10,
        color: '#2CBAEF',
        justifyContent:'center',
        fontSize:25
    },
    imgStyle: {
        width: 200,
        height: 200,
        marginTop:30
    }
    
});