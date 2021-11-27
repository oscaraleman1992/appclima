import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Buscador from "../screens/Buscador"

const Stack = createStackNavigator()

export default function BuscadorStak(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Buscador"
                component={Buscador}
                options={{title: "Donde encontrarnos"}}/>
           
        </Stack.Navigator>
    )

}