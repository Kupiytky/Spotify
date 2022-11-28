import {Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Register({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}} >
                <Image source={require('../assets/logo (2).svg')} style={[styles.image, { alignItems: 'center' }]} />
          </View>



            <View style={{ marginTop: -40 }}>
                <Pressable onPress={() => {  navigation.navigate('ResigsterOrSignUp',) }} >
                    <View style={{ backgroundColor: 'rgba(255, 255, 255,0.03)', width: 32, height: 32, borderRadius: 50, marginHorizontal: 30, position: "absolute" }} >
                        <Image source={require('../assets/Left 2.svg')} style={[styles.icon, { marginTop: 9, marginHorizontal: 12 }]} />
                    </View>
                </Pressable>
            <Text style={[styles.text, { fontWeight: 'bold', fontSize: 30, justifyContent: 'center', textAlign: 'center', }]} >Register</Text>
            <Text style={[styles.text, { marginHorizontal: 120, marginTop: 10 }]} >If You Need Any Support</Text>

            <Pressable>
                <Text style={[styles.text, { marginHorizontal: 255, marginTop: -16, color: '#38B432', width: 100 }]} >Click here</Text>
            </Pressable>

            <View style={{ marginTop: -10 }} >
              <TextInput placeholder="Full Name" style={ [styles.input, {  }]}></TextInput>
              <TextInput placeholder="Enter Email" style={ [styles.input, { marginTop: -10, }]}></TextInput>
              <TextInput placeholder="Password" style={ [styles.input, { marginTop: -10, }]}></TextInput>

              <Pressable style={styles.pressable}>
                <Text style={[styles.text, { marginTop: 20, fontSize: 22, lineHeight: 30, }]} >Creat Account</Text>
              </Pressable>

              <Image source={require('../assets/or.svg')} style={styles.or} />
              <Image source={require('../assets/logo2.svg')} style={styles.logo2} />
              <Text style={[styles.text, { marginHorizontal: 125, marginTop: 60 }]}>Do You Have An Account?</Text>

              <Pressable>
                <Text style={[styles.text, { marginHorizontal: 266, marginTop: -16, color: '#288CE9', width: 100 }]} >Sign In</Text>
              </Pressable>
            </View>
          </View>
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
        marginTop: 100,

    },
    pressable: {
        backgroundColor: '#42C83C',
        width: 352,
        height: 80,
        borderRadius: 30,
        marginHorizontal: 35,
        marginTop: 10,
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