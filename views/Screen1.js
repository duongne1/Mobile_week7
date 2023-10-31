import * as React from 'react';
import { View, Image, Text,TouchableOpacity, StyleSheet} from 'react-native';

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.view1}>
            <Text style={styles.text2}>Welcome to Cafe world</Text>
        </View >
            
        <View style={styles.view2}>
            <Image style={styles.img} source={require("../assets/img1.png")}></Image>
            <Image style={styles.img} source={require("../assets/img2.png")}></Image>
            <Image style={styles.img} source={require("../assets/img1.png")}></Image>
        </View>

        <View style={styles.view3}>
            <TouchableOpacity style={styles.btn1} onPress={()=> navigation.navigate('Screen2')}>
            <Text style={styles.text1}>GET STARTED</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: 390,
        height: 844,
        borderWidth: 1,
        flex: 5,
        backgroundColor: '#DEE1E6',
    },
    text1:{
        backgroundColor: '#00BDD6',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 40,
        height: 36,
        height: 60,
        textAlign: 'center',
        color: 'white',
        borderRadius: 6,
        

    },
    btn1: {
        width: 312,
        height: 40,
        justifyContent: 'center',
        
    },
    text2: {
        fontSize: 24,
        fontFamily: 'Inter',
        fontWeight: 700,
        lineHeight: 36,
    },
    view1:{
        flex: 1,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img:{
        width: 200,
        height: 62,
        borderRadius: 6,
        margin: 25,
    },
    view2:{
        flex: 3,
        alignItems: 'center',
    },
    view3:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});