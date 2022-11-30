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
import Billie1 from "./screens/Billie1";
import Navigation from "./Screens/Navigation";
import Drake from "./Screens/Drake";
import Billie2 from "./screens/Billie2";

const Stack = createNativeStackNavigator();

export default function App() {
    return(
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>

                    <Stack.Screen
                        name="Billie2"
                        component={Billie2}

                    />

                    <Stack.Screen
                        name="Drake"
                        component={Drake}

                    />

                    <Stack.Screen
                        name="Billie1"
                        component={Billie1}

                    />

                    <Stack.Screen
                        name="Navigation"
                        component={Navigation}

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