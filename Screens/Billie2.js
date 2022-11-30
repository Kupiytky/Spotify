import {Image, ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import * as React from "react";

export default function GetStarted({ navigation }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => {  navigation.navigate('Navigation',) }} >
                <View style={{ backgroundColor: 'rgba(255, 255, 255,0.03)', width: 32, height: 32, borderRadius: 50, marginHorizontal: 30, position: "absolute", marginVertical: 35 }} >
                    <Image source={require('../assets/Left 2.svg')} style={[styles.icon, { marginTop: 9, marginHorizontal: 12 }]} />
                </View>
            </Pressable>

            <Text style={[styles.text, { fontWeight: 'bold' }]} >Now playing</Text>
            <Image source={require('../assets/more.svg')} style={{ width: 4, height: 18, marginVertical: -18, marginHorizontal: 380 }} />
            <Image source={require('../assets/billie2.svg')} style={{ width: 335, height: 370, borderRadius: 30, marginVertical: 45, marginHorizontal: 50 }} />

            <View style={{ marginVertical: -5 }} >
                <Text style={ [styles.text, {width: 200, color: '#E1E1E1', fontSize: 30, marginVertical: -25, marginHorizontal: 50, fontWeight: 'bold', lineHeight: 27, }]}>Bury a Friend</Text>
                <Text style={ [styles.text, { color: '#E1E1E1', fontSize: 20, marginVertical: 30, marginHorizontal: 53, width: 100, }]}>Billie Eilish</Text>
            </View>

            <Pressable>
                <Image source={require('../assets/Heart 2.svg')} style={{ width: 24, height: 24, marginHorizontal: 350, marginVertical: -65 }} />
            </Pressable>

            <Image source={require('../assets/myzka.svg')} style={{ width: 335, height: 240, marginHorizontal: 50, marginVertical: 40 }} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1B1B',
    },
    back: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: 196,
        height: 59,
        marginTop: -840,
        marginHorizontal: 97,
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 24,
        marginTop: 36,
    },
    icon: {
        width: 7,
        height: 13,
    },
});