import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Octicons, AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

export default function Screen4() {
  const route = useRoute();
  const { selectedProducts, data } = route.params;

  const [quantities, setQuantities] = useState(selectedProducts);

  const handleTangCount = (id) => {
    const newQuantities = { ...quantities };
    newQuantities[id] = (newQuantities[id] || 0) + 1;
    setQuantities(newQuantities);
  };

  const handleGiamCount = (id) => {
    const newQuantities = { ...quantities };
    if (newQuantities[id] && newQuantities[id] > 0) {
      newQuantities[id] = newQuantities[id] - 1;
      setQuantities(newQuantities);
    }
  };

  const total = () => {
    let total = 0;
    for (const id in quantities) {
      if (quantities[id] > 0) {
        const product = data.find((item) => item.id === id);
        if (product) {
          total += product.price * quantities[id];
        }
      }
    }
    return total;
  };

  useEffect(() => {
    setQuantities(selectedProducts);
  }, [selectedProducts]);

  return (
    <View style={styles.container}>
      <View style={styles.view11}>
        <Ionicons name="md-chevron-back-sharp" size={24} color="gray" />
        <Text style={styles.text11}>Your orders</Text>
        <Octicons name="search" size={24} color="green" />
      </View>
      <View style={styles.view12}>
        <View>
          <Text style={styles.text12}>CAFE DELIVERY</Text>
          <Text style={styles.text12}>Order #18</Text>
        </View>
        <Text style={styles.text13}>$5</Text>
      </View>
      <View style={styles.view13}>
        <View>
          <Text style={styles.text12}>CAFE</Text>
          <Text style={styles.text12}>Order #18</Text>
        </View>
        <Text style={styles.text13}>${total()}</Text>
      </View>

      <ScrollView>
        {data.map((item) => {
          const selectedQuantity = quantities[item.id] || 0;
          if (selectedQuantity > 0) {
            return (
              <View style={styles.view2} key={item.id}>
                <Image style={styles.img} source={item.img}></Image>
                <View style={styles.view3}>
                  <Text style={styles.text2}>{item.name}</Text>
                  <View style={styles.view4}>
                    <Ionicons
                      style={{ left: 20, top: 5 }}
                      name="play-outline"
                      size={22}
                      color="gray"
                    />
                    <Text style={styles.text3}><Text>$</Text>{item.price}</Text>
                  </View>
                </View>
                <View style={styles.view5}>
                  <TouchableOpacity onPress={() => handleTangCount(item.id)}>
                    <Ionicons
                      name="ios-add-circle"
                      size={26}
                      color="green"
                    />
                  </TouchableOpacity>
                  <TextInput
                    style={styles.txtIput}
                    value={selectedQuantity.toString()}
                  />
                  <TouchableOpacity onPress={() => handleGiamCount(item.id)}>
                    <AntDesign name="minuscircle" size={21} color="green" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }
          return null;
        })}
      </ScrollView>
      <TouchableOpacity style={styles.top1} onPress={()=> navigation.navigate('Screen1')}>
        <Text style={styles.text4}>PAY NOW</Text>
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
  view11: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  text11: {
    fontSize: 26,
    fontFamily: "Inter",
    fontWeight: 700,
    left: -80,
    top: -4,
  },
  view12: {
    backgroundColor: "#00BDD6",
    width: 347,
    height: 100,
    borderRadius: 6,
    left: 20,
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  view13: {
    backgroundColor: "#8353E2",
    width: 347,
    height: 100,
    borderRadius: 6,
    left: 20,
    bottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  text12: {
    fontSize: 18,
    fontWeight: 700,
    color: "white",
    marginBottom: 10,
  },
  text13: {
    fontSize: 22,
    fontWeight: 700,
    color: "white",
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
  text2: {
    fontSize: 18,
    fontFamily: "Inter",
    fontWeight: 700,
    left: 20,
    bottom: 10,
  },
  view3: {
    flexDirection: "column",
  },
  text3: {
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: 700,
    left: 20,
    color: "gray",
    top: 9,
  },
  view4: {
    flexDirection: "row",
  },
  txtIput: {
    width: 22,
    height: 22,
    borderWidth: 1,
    fontSize: 18,
    textAlign: "center",
    fontStyle: 700,
  },
  view5: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 100,
    right: -90,
  },
  top1: {
    backgroundColor: "#EFB034",
    height: 50,
    width: 350,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  text4: {
    fontSize: 19,
    color: "white",
    fontWeight: 400,
  },
});
