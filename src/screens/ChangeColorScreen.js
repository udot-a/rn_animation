import React, {useState} from "react";
import {Button, StyleSheet, View, FlatList, Text} from "react-native";
import RgbButton from "./RgbButton";

const ChangeColorScreen = () => {
  const [rgb, setRGB] = useState({
    red: 0,
    green: 0,
    blue: 0
  });

  const colors = ["red", "green", "blue"];

  const setState = (color, isPlus) => {
    if (isPlus && rgb[color] === 255) {
      return;
    }

    if (!isPlus && rgb[color] === 0) {
      return;
    }

    setRGB(prev => ({
      ...prev, [color]: isPlus ? ++prev[color] : --prev[color]
    }))
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        renderItem={({item}) => (<RgbButton color={item} setState={setState} value={rgb[item]}/>)}
        keyExtractor={( item) =>  item}
      />

      <View style={{margin: 10, height: 100, weight: 100, backgroundColor: `rgb(${Object.values(rgb)})`}}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },


});

export {ChangeColorScreen as default};
