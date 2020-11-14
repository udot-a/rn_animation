import React from "react";
import {Button, StyleSheet, View, Text} from "react-native";

const RgbButton = ({color, setState, value}) => {
  return (
    < View style={styles.container}>
      <Text style={[styles.text, {color}]}>
        {color.toUpperCase()}: {value}
      </Text>

      <View style={styles.buttonBlock}>
        <Button
          color={color}
          title={`More ${color.toUpperCase()}`}
          onPress={() => {
            setState(color, true)
          }}
        />

        <Button
          color={color}
          title={`Less ${color}`}
          onPress={() => setState(color, false)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },

  text: {
    alignSelf: "flex-start",
    fontSize: 25,
    color: "tomato"
  },

  buttonBlock: {
    flex: 1,
    borderWidth: 1,
    alignItems: "center",
    borderColor: "green",
    borderRadius: 15,
    justifyContent: "space-around",
    height: 100,
    width: 300,
    margin: 5
  }

});

export {RgbButton as default};
