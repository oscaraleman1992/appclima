import React from "react"
import {View,Text,StyleSheet,TextInput,TouchableHighlight, ScrollView} from "react-native"
import { useNavigation } from "@react-navigation/core"

export default function Registrarse(){
    const navigation=useNavigation();
    return(
        <ScrollView styles={styles.container}>
            <View >
                <Text style={styles.titulo}>Formulario</Text>
                <TextInput style={styles.input} placeholder="nombre"/>
                <TextInput style={styles.input} placeholder="apellido"/>
                <TextInput style={styles.input} placeholder="dni"/>
                <TouchableHighlight 
                style={styles.boton}
                buttonStyle={styles.button}
                containerStyle={styles.btnContainer}
                onPress={()=>navigation.navigate("login")}>
                        <Text style={styles.enviar}>
                            Ingresar
                        </Text>
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.btn}
                buttonStyle={styles.button}
                containerStyle={styles.btnContainer}
                onPress={()=>navigation.navigate("login")}>
                        <Text style={styles.enviar}>
                            Registrarse
                        </Text>
            </TouchableHighlight>
            </View>
        </ScrollView>

    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f5fcff",
        marginTop:30,
        paddingLeft:15,
        paddingRight:15,
    },
    input:{
        height:40,
        borderColor:'#ffooff',
        borderWidth:2,
        marginBottom:20
    },
    titulo:{
        textAlign:"center",
        fontSize:20
    },
    boton:{
        backgroundColor:"rgb(0,0,146)",
        paddingTop:15,
        paddingBottom:15,
    },
    btn:{
        backgroundColor:"rgb(255, 87, 51)",
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        
    },
    button:{
        backgroundColor:"#00a680"
    },
    btnContainer:{
        width:"20%"
    },
    enviar:{
        textAlign:"center",
        color:"white"
    }
})