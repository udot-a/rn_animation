import React, {useState} from "react";
import {NativeModules,
  LayoutAnimation, Text, StyleSheet, View, TouchableOpacity} from "react-native";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);


const BoxScreen = () => {
  const [isPress, setPress] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {"Box 1"}
      </Text>

      <TouchableOpacity
        style={[styles.text2, isPress && styles.modal]}
        onPress={() => {
          LayoutAnimation.spring();
          setPress(prev => !prev)
        }}
      >
        <Text >
          {"Box 2"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        {"Box 3"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    borderWidth: 3,
    borderColor: "black",
    padding: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },

  text: {
    borderColor: "tomato",
    borderWidth: 4,
    padding: 10,
    margin: 10,
    textAlign: "center"
  },

  text1: {
    flex: 1,
    borderColor: "green",
    borderWidth: 4,
    padding: 10,
    margin: 10,
    textAlign: "center"
  },
  text2: {
    borderColor: "green",
    borderWidth: 4,
    padding: 10,
    margin: 10,
    textAlign: "center"
  },

  modal: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "lightgreen"
  }
});

export {BoxScreen as default};
