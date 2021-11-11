import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Playas from "../screens/Playas"

const Stack = createStackNavigator()

export default function PlayasStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Playas"
                component={Playas}
                options={{title: "Playas"}}/>
           



        </Stack.Navigator>
    )

}