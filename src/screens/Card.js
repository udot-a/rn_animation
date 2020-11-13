import React, {useState, useEffect, useRef} from "react";
import { NativeModules,
  LayoutAnimation,Text, StyleSheet, View, Image, TouchableOpacity, AppState } from "react-native";
import {height, width} from "./screenSize";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

function useOutsideAlerter(ref, setState) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setState();
      }
    }

    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
}


const Card = ({img, text}) => {
  const [anime, setAnime] = useState({scale: 1, offset: 0});

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.containerImg,
          {transform: [{translateX: anime.offset}, {scale: anime.scale}]},
        ]}
        onPress={() => {
          LayoutAnimation.spring();
          setAnime(prev => ({
            scale: prev.scale ===1 ? 1.3 : 1,
            offset: prev.offset === 0 ? 100 : 0
          }))
        }}
      >
        <Image
          style={styles.img}
          source={img}
          onMouseEnter={() => {}}
        />
      </TouchableOpacity>

      <Text styles={{fontSize: 35, fontStyle: "bold"}}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "tomato",
    padding: 10,
    height: 0.2 * height,
    margin: 10
  },

  containerImg: {
    width: 0.4 * width,
    height: 0.18 * height,
    borderRadius: 10,
    borderColor: "lightblue",
    borderWidth: 1
  },

  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    margin: 5
  }
});

export {Card as default};
