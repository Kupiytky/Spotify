
import {Image, ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';

export default function ChooseMode({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/back2.svg')} style={styles.back} />
            <View>
                <Image source={require('../assets/logo (2).svg')}  style={styles.image} />
                <Text style={styles.text} >Choose mode</Text>
                <Pressable>
                <View style={{ backgroundColor: 'rgba(76,76,76,0.7)', width: 73, height: 73, borderRadius: 50, marginHorizontal: 110, marginTop: 30, }} >
                    <Image source={require('../assets/Moon.svg')} style={[styles.icon, { marginTop: 18, marginHorizontal: 18 }]} />
                    <Text style={[styles.text, { fontSize: 17, width: 100, lineHeight: 23, marginTop: 40, marginHorizontal: -10 }]} >Dark mode</Text>
                </View>
                </Pressable>

                <Pressable>
                    <View style={{ backgroundColor: 'rgba(76,76,76,0.7)', width: 73, height: 73, borderRadius: 50, marginHorizontal: 254, marginTop: -72, }} >
                        <Image source={require('../assets/Sun.svg')} style={[styles.icon, { marginTop: 18, marginHorizontal: 18 }]} />
                        <Text style={[styles.text, { fontSize: 17, width: 100, lineHeight: 23, marginTop: 40, marginHorizontal: -10 }]} >Light mode</Text>
                    </View>
                </Pressable>

                <Pressable style={styles.pressable} onPress={() => {  navigation.navigate('ResigsterOrSignUp',) }} >
                    <Text style={[styles.text, { marginTop: 30, fontSize: 22, lineHeight: 30, }]} >Continue</Text>
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
        width: '100%',
        height: '100%',
    },
    image: {
        width: 196,
        height: 59,
        marginTop: -810,
        marginHorizontal: 97,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        lineHeight: 29,
        marginTop: 275,
    },
    pressable: {
        backgroundColor: '#42C83C',
        width: 329,
        height: 92,
        borderRadius: 30,
        marginHorizontal: 47,
        marginTop: 200
    },
    icon: {
        width: 36,
        height: 36,
    },
});