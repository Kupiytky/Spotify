
import {Image, ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/back5.svg')} style={styles.back} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1B1B',
        justifyContent: 'center',
    },
    back: {
        width: '100%',
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