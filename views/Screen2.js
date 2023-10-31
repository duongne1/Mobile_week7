import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image,ScrollView  } from 'react-native';
import { Ionicons, Octicons, AntDesign,MaterialIcons  } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-web';

export default function Screen2({ navigation }) {

  var [data1, setData1] = useState([]);

  useEffect(() => {
    fetch('https://6540bd9045bedb25bfc27c81.mockapi.io/BT')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        setData1(json);
    });
}, []);

 
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Ionicons name="md-chevron-back-sharp" size={24} color="gray" />
        <Text style={styles.text1}>Shops Near Me</Text>
        <Octicons name="search" size={24} color="green" />
      </View>
      <ScrollView>
      {
            data1.map((item) =>{
                return(
                  <TouchableOpacity onPress={()=> navigation.navigate('Screen3')} key={item.id} style={styles.view2}>
                  <View style={styles.view6}>
                  <Image style={styles.img} source={item.img}></Image>
                  <View style={styles.view3}> 
                    <View style={styles.view4}>
                      <Image style={styles.img1}  source={item.icon}></Image>
                      <Text style={[styles.text2, item.status === "Tempory Unavailable" ? { color: 'red' } : {}]}>
                        {item.status}</Text>
                    </View>
                    <View style={styles.view5}>
                    <AntDesign style={styles.img2} name="clockcircleo" size={18} color="green" />
                      <Text style={styles.text3}>{item.time}</Text>
                    </View>
                    <View>
                    <MaterialIcons style={{top: 2}} name="location-on" size={26} color="green" />
                    </View>
                  </View>
                  <Text style={styles.text4}>{item.name}</Text>
                  <Text style={styles.text5}>{item.address}</Text>
                  </View>
                </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: '#F3F4F6',
    },
    view1:{
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        marginBottom: 20,
        
    },
    view6:{
      elevation: 4, 
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      borderRadius: 6,
      
  },
    text1:{
        fontSize: 26,
        fontFamily: 'Inter',
        fontWeight: 700,
    },
    view2:{
      top: 20,
      flex: 3,
      alignItems: 'center',
      marginBottom: 20,
    },
    img:{
      width: 360,
      height: 144,
      borderRadius: 6,
    },
    img1: {
      width: 19,
      height: 14,
      top: 10,
    },
    img2: {
      width: 19,
      height: 14,
      top: 10,
      left: -10,
    },
    text2: {
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: 20,
      top: 10,
      left: 10,
      color: 'green',
    },
    text3: {
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: 20,
      top: 10,
      left: 10,
      color: 'red',
      textAlign: 'center',
    },
    view4:{
      flexDirection: 'row',
      width: 166,
      backgroundColor: "#E8E8E8",
      height: 35,
      alignItems: 'left',
      borderRadius: 3,
      justifyContent: 'center',
      
      
      
    },
    view5:{
      flexDirection: 'row',
      width: 150,
      backgroundColor: "#E8E8E8",
      height: 35,
      alignItems: 'left',
      borderRadius: 3,
      justifyContent: 'center',
      marginLeft: 15,
      
    },
    view3:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 5,
      
    },
    text4:{
      fontSize: 16,
      fontFamily: 'Inter',
      fontWeight: 700,
      left: 7,
    },
    text5:{
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: 22,
      left: 7,
      color: 'gray',
    }
})