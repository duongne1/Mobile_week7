import React, {useState, useEffect} from 'react';
import { View, Image, Text, ScrollView, StyleSheet,TextInput, TouchableOpacity } from "react-native";
import {Ionicons,Octicons,AntDesign,} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function Screen3() {
  var [data, setData] = useState([]);
  const [quantities, setQuantities] = useState([]);

  const handleTangCount = (id) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };
  const handleGiamCount = (id) => {
    setQuantities(prevQuantities => {
      if (prevQuantities[id] && prevQuantities[id] > 0) {
        return {
          ...prevQuantities,
          [id]: prevQuantities[id] - 1,
        };
      }
      return prevQuantities;
    });
  };


  useEffect(()=>{
    fetch('https://6540bd9045bedb25bfc27c81.mockapi.io/item')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        setData(json);
    });
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Ionicons name="md-chevron-back-sharp" size={24} color="gray" />
        <Text style={styles.text1}>Drinks</Text>
        <Octicons name="search" size={24} color="green" />
      </View>
      <ScrollView>
        { 
          data.map((item) =>{
            return(
              <View style={styles.view2}>
              <Image style={styles.img} source={item.img}></Image>
            <View style={styles.view3}>
              <Text style={styles.text2}>{item.name}</Text>
              <View style={styles.view4}>
                <Ionicons style={{left:20, top: 5}} name="play-outline" size={22} color="gray" />
                <Text style={styles.text3}><Text>$</Text>{item.price}</Text>
              </View>
            </View>
              <View style={styles.view5}>
              <TouchableOpacity >
              <Ionicons onPress={() => handleTangCount(item.id)}   name="ios-add-circle" size={26} color="green" />
              </TouchableOpacity>
              <TextInput style={styles.txtIput} value={quantities[item.id]?.toString() || '0'}></TextInput>
              <TouchableOpacity>
              <AntDesign  onPress={() => handleGiamCount(item.id)} name="minuscircle" size={21} color="green" />
              </TouchableOpacity>
              </View>
              
          </View>
            )
          })
        }
      </ScrollView>
      <TouchableOpacity style={styles.top1} onPress={()=>navigation.navigate('Screen4', { selectedProducts: quantities, data: data })}>
        <Text style={styles.text4}>GO TO CART</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 844,
    borderWidth: 1,
    flex: 5,
    backgroundColor: "white",
  },
  view1: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  text1: {
    fontSize: 26,
    fontFamily: "Inter",
    fontWeight: 700,
    left: -80,
    top: -4,
  },
  view2: {
    width: 350,
    height: 74,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: "center",
    left: 20,
    flexDirection: "row",
    marginBottom: 16,
  },
  img: {
    width: 70,
    height: 70,
  },
  text2:{
    fontSize: 18,
    fontFamily: "Inter",
    fontWeight: 700,
    left: 20,
    bottom: 10,

  },
  view3:{
    flexDirection: "column",
  },
  text3:{
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: 700,
    left: 20,
    color: 'gray',
     top:9
  },
  view4:{
    flexDirection: "row",
  },
  txtIput:{
    width: 22,
    height: 22,
    borderWidth: 1,
    fontSize: 18,
    textAlign: "center",  
    fontStyle: 700,
  },
  view5:{
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
    right: -90,
  },
  top1:{
    backgroundColor: '#EFB034',
    height: 50,
    width: 350,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  text4:{
    fontSize: 19,
    color: 'white',
    fontWeight: 400,
  }
});
