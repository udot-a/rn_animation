import React from "react";
import { Text, FlatList, StyleSheet, View } from "react-native";

const ListScreen = () => {
  const friends = [
    {name: "Dron"},
    {name: "Vasya"},
    {name: "Ivan"},
    {name: "John"},
    {name: "Petr"},
    {name: "Jackob"},
    {name: "Harry"},
    {name: "Steve"},
    {name: "Harry"},
    {name: "Steve"},
    {name: "Harry"},
    {name: "Steve"}
  ];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={true}
      ItemSeparatorComponent={() => (<View style={styles.separator}/>)}
      data={friends}
      renderItem={({item: {name}, index}) => (<Text style={styles.text}>{index + 1}. {name}</Text>)}
      keyExtractor={( _, index) =>  index + ""}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    marginVertical: 25,
    alignSelf: "center"
  },
  separator: {
    height: 5,
    backgroundColor: "lightblue",
    opacity: 0.5
  }
});

export {ListScreen as default};
