import React from "react";
import { Text, StyleSheet, View, FlatList} from "react-native";
import Card from "./Card";

import img1 from "../../assets/ocean.jpg";
import img2 from "../../assets/forest.jpg";
import img3 from "../../assets/desert.jpg";


const ImageList = () => {
  const data = [
    {img: img1, text: "OCEAN"},
    {img: img2, text: "FOREST"},
    {img: img3, text: "DESERT"}
  ];

  return (
    <FlatList
      ItemSeparatorComponent={() => (<View style={styles.separator}/>)}
      data={data}
      renderItem={({item}) => (<Card {...item}/>)}
      keyExtractor={( _, index) =>  index + ""}
    />

  );
}

const styles = StyleSheet.create({

});

export {ImageList as default};

