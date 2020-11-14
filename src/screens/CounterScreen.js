import React, {useState} from "react";
import { Text, Button, StyleSheet, View, TouchableOpacity } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>

      <View style={styles.separator}/>

      <Button
        title={"Increase"}
        color={"lightgreen"}
        onPress={() => setCounter(prev => ++prev)}
        name={"inc"}
      />

      <View style={styles.separator}/>

      <Button
        title={"Decrease"}
        color={"tomato"}
        onPress={() => setCounter(prev => --prev) }

      />

      <Text style={styles.text}>
        {counter}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },

  separator: {
    height: 15
  },

  text: {
    fontSize: 30,
    fontWeight: "bold"
  }

});

export {CounterScreen as default};
