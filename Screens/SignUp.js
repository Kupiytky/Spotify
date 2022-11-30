
import {Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

export default function SignUp({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}} >
                <Image source={require('../assets/logo (2).svg')} style={[styles.image, { alignItems: 'center' }]} />
            </View>
            <Pressable onPress={() => {  navigation.navigate('ResigsterOrSignUp',) }} >
                <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', width: 32, height: 32, borderRadius: 50, marginHorizontal: 30, position: "absolute", marginTop: -32 }} >
                    <Image source={require('../assets/Left 2.svg')} style={[styles.icon, { marginTop: 9, marginHorizontal: 12 }]} />
                </View>
            </Pressable>
            <Text style={[styles.text, { fontWeight: 'bold', fontSize: 30, justifyContent: 'center', textAlign: 'center', }]} >Sign in</Text>
            <Text style={[styles.text, { marginHorizontal: 120, marginTop: 30 }]} >If you need any support</Text>

            <Pressable>
                <Text style={[styles.text, { marginHorizontal: 250, marginTop: -16, color: '#38B432', width: 100 }]} >Click here</Text>
            </Pressable>

            <TextInput placeholder="Enter Username Or Email" style={ [styles.input, {  }]}></TextInput>
            <TextInput placeholder="Password" style={ [styles.input, { marginTop: -10, }]}></TextInput>
            <Text style={[styles.text, { marginHorizontal: 45, marginTop: 1, color: '#AEAEAE' }]} >Recovery Password</Text>

            <Pressable style={styles.pressable} onPress={() => {  navigation.navigate('Navigation',) }} >
                <Text style={[styles.text, { marginTop: 30, fontSize: 22, lineHeight: 30, }]} >Sign In</Text>
            </Pressable>

            <Image source={require('../assets/or.svg')} style={styles.or} />
            <Image source={require('../assets/logo2.svg')} style={styles.logo2} />
            <Text style={[styles.text, { marginHorizontal: 140, marginTop: 60 }]}>Not A Member ? </Text>

            <Pressable>
                <Text style={[styles.text, { marginHorizontal: 230, marginTop: -16, color: '#288CE9', width: 100 }]} >Register Now</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1B1B',
        justifyContent: 'flex-start',
    },
    back: {
        width: '102%',
        height: '100%',
    },
    image: {
        width: 110,
        height: 33,
        marginTop: 36,
    },
    text: {
        color: 'white',
        fontSize: 12,
        marginTop: 130,
        lineHeight: 16,
    },
    pressable: {
        backgroundColor: '#42C83C',
        width: 352,
        height: 80,
        borderRadius: 30,
        marginHorizontal: 35,
        marginTop: 30,
        alignItems: 'center'
    },
    icon: {
        width: 7,
        height: 13,
    },
    input: {
        borderWidth: 1,
        height: 85,
        borderRadius: 30,
        margin: 25,
        color: '#A7A7A7',
        borderColor: 'rgba(255,255,255,0.13)',
        marginTop: 40,
        padding: 30
    },
    or: {
        width: 352,
        height: 16,
        marginHorizontal: 33,
        marginTop: 20
    },
    logo2: {
        width: 115.27,
        height: 36,
        marginHorizontal: 150,
        marginTop: 40,

    },
});