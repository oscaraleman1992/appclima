import React, {useState} from "react";
import { Animated, View, Text, TextInput, StyleSheet, TouchableWithoutFeedback} from "react-native";
import {Picker} from '@react-native-picker/picker';



export default function Playas(){
    const [animacionboton] = useState(new Animated.Value(1));
    
    //no me esta funcionando la animación en web habria que probar en Android//
    const animacionEntrada = () => {
        Animated.spring( animacionboton, {
            toValue: 0.9,
            //useNativeDriver: true,
        }).start();
    }

    const animacionSalida = () => {
        Animated.spring ( animacionboton, {
            toValue: 1,
            friction:4,
            tension: 30
            //useNativeDriver: true,
        }).start();
    }
    const estiloAnimacion = {
        transfomm: [{ scale: animacionboton }]
    }

    return (

<>
        <View>
                    <TextInput style={styles.input}
                    placeholder="ciudad"
                    placeholderTextColor="#666">
                    
                    </TextInput>
        </View>
        <View>
        <Picker style={{ height:50, backgroundColor: '#2CBAEF' }}>
            <Picker.Item label="Seleccione un pais" value="" />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="Brasil" value="BR" />
            <Picker.Item label="Chile" value="CL" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="Uruguay" value="UR" />
        </Picker>
        </View>
        <TouchableWithoutFeedback 
        onPressIn= { () => animacionEntrada()}
        onPressOut= { () => animacionSalida()}
        onPressOut= { () => consultarClima ()}
        >
            <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
                <Text style={styles.textoBuscar}>Buscar Clima</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
   
    </>
    )
}


const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50,
        backgroundColor: 'rgb(216, 250, 26 )',
        fontSize:20,
        marginBottom:40,
        textAlign: 'center'
    },
    btnBuscar:{
            marginTop:50,
            backgroundColor: '#2CBAEF',
            padding: 10,
            justifyContent: 'center'

    },
    textoBuscar:{
            color:'#fff',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: 18,
            

    }
  
})