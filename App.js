import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import GetStarted from "./screens/GetStarted";
import ChooseMode from "./screens/ChooseMode";
import ResigsterOrSignUp from "./screens/ResigsterOrSignUp";
import SignUp from "./screens/SignUp";
import Register from "./screens/Register";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
    return(
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>

                    <Stack.Screen
                        name="Regidster"
                        component={Register}

                    />

                    <Stack.Screen
                        name="Home"
                        component={Home}

                    />

                    <Stack.Screen
                        name="GetStarted"
                        component={GetStarted}

                    />

                    <Stack.Screen
                        name="ChooseMode"
                        component={ChooseMode}

                    />

                    <Stack.Screen
                        name="ResigsterOrSignUp"
                        component={ResigsterOrSignUp}

                    />

                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}

                    />

                    <Stack.Screen
                        name="Register"
                        component={Register}

                    />

                </Stack.Navigator>
            </NavigationContainer>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191b23',
    },
});