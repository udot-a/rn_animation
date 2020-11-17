import React, {useState} from "react";
import {StyleSheet, View, FlatList, Picker, Text} from "react-native";
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
        style={{alignSelf: "center"}}
        data={colors}
        renderItem={({item}) => (<RgbButton color={item} setState={setState} value={rgb[item]}/>)}
        keyExtractor={( item) =>  item}
      />

      <View style={{margin: 10, height: 100, weight: 150, backgroundColor: `rgb(${getRGB()})`}}/>

      <View style={styles.chooseStep}>
        <View >
          <Text style={styles.text}>
            {"Choose step to inc/dec: "}
          </Text>
        </View>

        <View >
          <Picker
            selectedValue={getStep()}
            style={{ height: 20, width: 100 }}
            onValueChange={(itemValue) => setCurrentStep(itemValue)}
            mode={"dropdown"}
          >
            {pickers.map(item => (<Picker.Item label={item.title} value={item.title} key={item.id} />))}
          </Picker>
        </View>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    // alignItems: "center"
  },

  chooseStep: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },

  text: {
    fontWeight: "bold",
    fontSize: 15,
  }


});

export {ChangeColorScreen as default};
