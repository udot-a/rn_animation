import React, {useState} from "react";
import { Text, Button, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Enter password:
      </Text>
      <TextInput
        style={[styles.input, {borderColor: text.length < 6 && text.length !== 0 ? "tomato" : "green"}]}
        value={text}
        onChangeText={setText}
        defaultValue={"Type name here..."}
        autoCapitalize={"none"}
      />


      {(text.length < 6 && text.length !== 0) && <Text style={[styles.text, {color: "tomato", fontSize: 12}]}>
        Password must be longer than 5 symbols.
      </Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    borderColor: "tomato",
    borderWidth: 1,
    margin: 20,
    padding: 5
  },

  text: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold"
  }

});

export {TextScreen as default};
