import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from 'react-native-elements'


import UsuarioStack from "./UsuarioStack"
import BuscadorStak from "./BuscadorStack"
import HomeStack from "./HomeStack"
import PlayasStack from "./PlayasStack"

const Tab = createBottomTabNavigator()

export default function Navigations(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="home"
            tabBarOptions={{
                inactiveTintColor:"#646464",
                activeTintColor:"#00a668",

            }}
            screenOptions={({route}) =>({
                tabBarIcon: ({color}) => screenOptions(route,color)
            })}
            
            
            >
                <Tab.Screen name="home" component={HomeStack}/>
                <Tab.Screen name="user" component={UsuarioStack}/>
                <Tab.Screen name="playas" component={PlayasStack}/>
                <Tab.Screen name="buscador" component={BuscadorStak}/>

               
            </Tab.Navigator>


        </NavigationContainer>


    )
}


function screenOptions(route,color){
let iconName;

switch (route.name) {
    case "home":
    iconName="home" 
         break;
     case "user":
      iconName= "person"
          break;
    case "playas":
      iconName="cloud"
          break;
    case "buscador":
      iconName= "search"
          break;

    default:
        break;
} 
 return(
    <Icon type="material-comunity" name={iconName} size={20} color={color}/>
)

}