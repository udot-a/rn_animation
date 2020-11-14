import React, {useState} from "react";
import {Button, StyleSheet, View, FlatList, Text} from "react-native";

const randomRGB = () => [1, 2, 3].map(i => Math.floor(Math.random() * 256)) + "";

const ColorScreen = () => {
  const [colors, setColor] = useState([])
  return (
    <View style={styles.container}>
      <Button
        title={"Add color"}
        onPress={() => setColor(prev => [randomRGB(), ...prev])}
      />

      <FlatList
        data={colors}
        renderItem={({item}) => (<View style={{margin: 10, height: 100, weight: 100, backgroundColor: `rgb(${item})`}}/>)}
        keyExtractor={( _, index) =>  index + ""}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },


});

export {ColorScreen as default};
