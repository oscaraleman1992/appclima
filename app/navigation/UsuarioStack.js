import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Usuario from "../screens/cuenta/Usuario"
import Login from "../screens/cuenta/login";
const Stack = createStackNavigator()

export default function UsuarioStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="usuarios"
                component={Usuario}
                options={{title: "Usuarios:"}}/>
             <Stack.Screen
                name="login"
                component={Login}
                options={{title: "INICIAR SESION"}}/>
           



        </Stack.Navigator>
    )

}