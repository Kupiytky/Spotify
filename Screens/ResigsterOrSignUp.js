
import {Image, ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';

export default function ResigsterOrSignUp({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/back3.1.svg')} style={styles.back} />
            <View>
                <Image source={require('../assets/logo (2).svg')}  style={styles.image} />

                <Pressable onPress={() => {  navigation.navigate('ChooseMode',) }} >
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', width: 32, height: 32, borderRadius: 50, marginHorizontal: 30, marginTop: -200, }} >
                        <Image source={require('../assets/Left 2.svg')} style={[styles.icon, { marginTop: 9, marginHorizontal: 12 }]} />
                    </View>
                </Pressable>

                <Text style={styles.text} >Enjoy listening to music</Text>
                <Text style={[styles.text, { color: '#A0A0A0', fontSize: 17, lineHeight: 23, marginTop: 20 }]} >Spotify is a proprietary Swedish audio</Text>
                <Text style={[styles.text, { color: '#A0A0A0', fontSize: 17, lineHeight: 23, marginTop: 0 }]} >streaming and media services provider </Text>

                <Pressable style={styles.pressable} onPress={() => {  navigation.navigate('Register',) }} >
                    <Text style={[styles.text, { marginTop: 20, fontSize: 22, lineHeight: 30, }]} >Register</Text>
                </Pressable>

                <Pressable style={[styles.pressable, { backgroundColor: 'rgba(255,255,255,0)', marginTop: -73, marginHorizontal: 230 }]} onPress={() => {  navigation.navigate('SignUp',) }} >
                    <Text style={[styles.text, { marginTop: 20, fontSize: 22, lineHeight: 30, }]} >Sign in</Text>
                </Pressable>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    back: {
        width: '102%',
        height: '100%',
    },
    image: {
        width: 235,
        height: 71,
        marginTop: -710,
        marginHorizontal: 97,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 26,
        textAlign: 'center',
        lineHeight: 35,
        marginTop: 50,
    },
    pressable: {
        backgroundColor: '#42C83C',
        width: 147,
        height: 73,
        borderRadius: 30,
        marginHorizontal: 47,
        marginTop: 30
    },
    icon: {
        width: 7,
        height: 13,
    },
});