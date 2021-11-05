import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Usuario from "../screens/Usuario"

const Tab = createBottomTabNavigator()

export default function Navigations(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="user" component={Usuario}>

                </Tab.Screen>
            </Tab.Navigator>


        </NavigationContainer>


    )
}