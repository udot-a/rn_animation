import React, {useState} from "react";
import {StyleSheet, View, FlatList, Picker, Text, Platform} from "react-native";
import RgbButton from "./RgbButton";

const ChangeColorScreen = () => {
  const [rgb, setRGB] = useState({
    red: 0,
    green: 0,
    blue: 0
  });

  const [pickers,  setPicker] = useState([
    {title: "1", id: "1", select: true,  },
    {title: "10", id: "2", select: false},
    {title: "20", id: "3", select: false},
    {title: "30", id: "4", select: false}
  ]);

  const getStep = () => pickers.find(item => item.select)?.title;

  const setCurrentStep = value => setPicker(prev => [
    ...prev.map(item => {
      item.title === value ? item.select =true : item.select = false;
      return item;
    })
  ])

  const colors = ["red", "green", "blue"];

  const setState = (color, isPlus) => {
    if (isPlus && (rgb[color] + +getStep()) > 255 ) {
      return;
    }

    if (!isPlus && (rgb[color] - +getStep()) < 0) {
      return;
    }

    setRGB(prev => ({
      ...prev, [color]: isPlus ? prev[color] + +getStep() : prev[color] - +getStep()
    }))
  }

  const getRGB = () => colors.map(i => rgb[i]);

  return (
    <View style={styles.container}>
      <FlatList
        style={{height: Platform.OS === "android" ? "auto" : 260}}
        data={colors}
        renderItem={({item}) => (<RgbButton color={item} setState={setState} value={rgb[item]}/>)}
        keyExtractor={( item) =>  item}
      />


      <View style={styles.chooseStep}>
          <Text style={styles.text}>
            {"Choose step to inc/dec: "}
          </Text>

          <Picker
            selectedValue={getStep()}
            style={{ height: 30, width: 100, alignSelf: "center"}}
            onValueChange={(itemValue) => setCurrentStep(itemValue)}
            mode={"dropdown"}
          >
            {pickers.map(item => (<Picker.Item label={item.title} value={item.title} key={item.id} />))}
          </Picker>
      </View>

      <View style={[styles.viewColor, {backgroundColor: `rgb(${getRGB()})`}]}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  chooseStep: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },

  viewColor: {
    alignSelf: "stretch",
    margin: 10,
    height: 100
  },

  text: {
    fontWeight: "bold",
    fontSize: 15,
  }


});

export {ChangeColorScreen as default};
