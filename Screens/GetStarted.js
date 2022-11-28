import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';

export default function GetStarted({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/back (2).svg')} style={styles.back} />
            <View>
                <Image source={require('../assets/logo (2).svg')}  style={styles.image} />
                <Text style={[styles.text, { fontSize: 25, }]} >Enjoy listening to music</Text>
                <Text style={[styles.text, { marginTop: 20, color: '#797979' }]} >Lorem ipsum dolor sit amet,</Text>
                <Text style={[styles.text, { marginTop: -10, color: '#797979' }]} >consectetur adipiscing elit. Sagittis enim</Text>
                <Text style={[styles.text, { marginTop: -10, color: '#797979' }]} >purus sed phasellus. Cursus ornare id</Text>
                <Text style={[styles.text, { marginTop: -10, color: '#797979' }]} >scelerisque aliquam.</Text>
                <Pressable style={styles.pressable} onPress={() => {  navigation.navigate('ChooseMode',) }} >
                    <Text style={[styles.text, { marginTop: 30, fontSize: 22, lineHeight: 30, }]} >Get started</Text>
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
        marginTop: -840,
        marginHorizontal: 97,
    },
    text: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 33,
        marginTop: 435,
    },
    pressable: {
        backgroundColor: '#42C83C',
        width: 329,
        height: 92,
        borderRadius: 30,
        marginHorizontal: 47,
        marginTop: 30
    },
});