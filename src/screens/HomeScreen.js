import React from "react";
import { Text, Button, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return(
    <View style={styles.container}>
      <Text style={styles.text}>CHOOSE SAMPLE:</Text>

      <Button
        title={"Go to news"}
        onPress={() => navigation.navigate("New")}
      />

      <View style={styles.separator}/>

      <Button
        title={"Counter"}
        color={"orange"}
        onPress={() => navigation.navigate("Counter")}
      />

      <View style={styles.separator}/>

      <Button
        title={"Colors"}
        color={"pink"}
        onPress={() => navigation.navigate("Colors")}
      />

      <View style={styles.separator}/>

      <Button
        title={"Change colors"}
        color={"brown"}
        onPress={() => navigation.navigate("Change")}
      />

      <View style={styles.separator}/>

      <TouchableOpacity
        onPress={() => navigation.navigate("List")}
        style={styles.button}
      >
        <Text style={{fontSize: 20}}>{"Go to LIST"}</Text>
      </TouchableOpacity>

      <View style={styles.separator}/>

      <TouchableOpacity
        onPress={() => navigation.navigate("Images")}
        style={{...styles.button, backgroundColor: "tomato"}}
      >
        <Text style={{fontSize: 20}}>{"Go to IMAGES"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 30
  },
  mB: {
    marginBottom: 20,
    width: 120

  },

  button: {
    backgroundColor: "lightgreen",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },

  separator: {
    height: 15
  }
});

export default HomeScreen;
