import React from 'react';
import { View, Image, Text,TouchableOpacity, StyleSheet} from 'react-native';

export default function Screen3({ navigation }) {




  return (
    <View style={styles.container}>
     <Text>Screen3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: 390,
        height: 844,
        borderWidth: 1,
        flex: 5,
        backgroundColor: 'white',
    },

});