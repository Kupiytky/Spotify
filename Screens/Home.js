import * as React from "react";
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';

export default function Home({ navigation }) {

    const data = [
        {
            id: 1,
            position: 1,
            image: require('../assets/billie1.svg'),
            image1: require('../assets/play.svg'),
            "text": "Bad Guy",
            "text1": "Billie Eilish",
        },
        {
            id: 2,
            position: 2,
            image: require('../assets/drake.svg'),
            image1: require('../assets/play.svg'),
            "text": "Scorpion",
            "text1": "Drake",
        },
        {
            id: 3,
            position: 3,
            image: require('../assets/billie2.svg'),
            image1: require('../assets/play.svg'),
            "text": "Bury a Friend",
            "text1": "Billie Eilish",
        },
        ]

    const renderItem = ({item}) => {
        return(
            <View style={{}} >
            <Pressable style={{height: 250, alignItems: 'flex-end' }} onPress={() => {  navigation.navigate('Billie1',) }} >
                <Image source={item.image} style={ [styles.image, { borderRadius: 30, }] }/>
                <Image source={item.image1} style={ [styles.image, { width: 29, height: 29, marginVertical: -20,  }]}/>
                <Text style={ [styles.text, {width: 100, color: '#E1E1E1', fontSize: 15, position: 'absolute', marginVertical: 200, marginHorizontal: 40, fontWeight: 'bold' }]}>{item.text}</Text>
                <Text style={ [styles.text, { color: '#E1E1E1', fontSize: 15, position: 'absolute', marginVertical: 225, marginHorizontal: 40, width: 100, }]}>{item.text1}</Text>
            </Pressable>
        </View>);
    }

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 20 }}>
                <Image source={require('../assets/back6.svg')} style={styles.image1} />
                <Image source={require('../assets/BackBillie.png')} style={styles.back} />
            </View>

            <View style={{ marginStart: 20, marginTop: 20 }} >
                <FlatList
                    data={data}
                    horizontal="true"
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            </View>
            <Text style={[styles.text, { fontWeight: 'bold' }]} >Playlist</Text>
            <Text style={[styles.text, { marginHorizontal: 330, fontSize: 12, width: 100, color: '#C6C6C6', marginVertical: 517, }]} >See More</Text>

            <Pressable>
                <Image source={require('../assets/music1.svg')} style={styles.music} />
            </Pressable>

            <Pressable>
                <Image source={require('../assets/Heart 1.svg')} style={[styles.music, { width: 21, height: 21, marginTop: -33, marginHorizontal: 370 }]} />
            </Pressable>

            <Pressable>
                <Image source={require('../assets/music2.svg')} style={[styles.music, { marginTop: 30 }]} />
            </Pressable>

            <Pressable>
                <Image source={require('../assets/Heart 1.svg')} style={[styles.music, { width: 21, height: 21, marginTop: -33, marginHorizontal: 370 }]} />
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1B1B',
        justifyContent: 'top',
    },
    back: {
        width: 150,
        height: 190,
        position: 'absolute',
        marginHorizontal: 200,
        marginVertical: -15,
    },
    image1: {
        width: 334,
        height: 175,
        marginHorizontal: 45
    },
    image: {
        width: 147,
        height: 185,
        marginHorizontal: 7,
    },
    text: {
        color: 'white',
        fontSize: 20,
        lineHeight: 34,
        marginTop: 510,
        position: 'absolute',
        marginHorizontal: 40,
    },
    music: {
        width: 262,
        height: 43,
        marginTop: 120,
        marginHorizontal: 35
    },
});