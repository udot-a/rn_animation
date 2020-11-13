import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  return (
    <Text style={styles.text}>{"Hello it is some tex was typing here maybe!!!"}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize:30,
    backgroundColor: "lightgreen"
  }
});

export {ComponentsScreen as default};

