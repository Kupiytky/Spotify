import * as React from "react";
import { StyleSheet, Text, View, Image, } from 'react-native';


import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Home from "../Screens/Home";
const Tab = createBottomTabNavigator();

export default function Navigation() {
    return(
     <View style={styles.container}>
         <Tab.Navigator screenOptions={({ route }) => ({
             tabBarIcon: ({ focused, color, size }) => {
                 let iconName;
                 let sizes = { height: 28, width: 28, tintColor: "#737373"  }
                 if (route.name === 'Home') {
                     sizes = { height: 28, width: 28, tintColor: "#737373"  }
                     iconName = require('../assets/Home 2.svg')
                 } else if (route.name === 'Home1') {
                     sizes = { height: 28, width: 28, tintColor: "#737373"  }
                     iconName = require('../assets/Discovery 1.svg')
                 } else if (route.name === 'Home2') {
                     sizes = {height: 28, width: 28, tintColor: "#737373", }
                     iconName = require('../assets/Heart 2.svg')
                 } else if (route.name === 'Home3') {
                     sizes = { height: 28, width: 28, tintColor: "#737373" }
                     iconName = require('../assets/Vector.svg')
                 }
                 return <Image source={iconName} style={[{resizeMode:'center'}, sizes]}></Image>;
             },
             tabBarLabel: ({ focused, color, size }) => {
                 return <Text></Text>;
             },
             tabBarActiveTintColor: 'tomato',
             tabBarInactiveTintColor: 'gray',
             headerShown: false,
             tabBarStyle: { background: "#343434", height: 80, borderTopWidth: 0, borderRadius: 10   }
         })}>
             <Tab.Screen name="Home" component={Home}/>
             <Tab.Screen name="Home1" component={Home}/>
             <Tab.Screen name="Home2" component={Home}/>
             <Tab.Screen name="Home3" component={Home}/>
         </Tab.Navigator>
     </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1B1B',
        justifyContent: 'flex-start',
    },
});

