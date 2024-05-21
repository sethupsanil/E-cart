import { Icon, Text, View } from "@COMPONENTS/Themed";
import Colors from "@CONSTANTS/Colors";
import { AnimationText } from "@MODALS/SearchAnimation.modal";
import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";
const SearchAnimationBox = () => {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const currentSlideAnim = useRef(new Animated.Value(0)).current; // Initial value for the current text
  const nextSlideAnim = useRef(new Animated.Value(50)).current; // Initial value for the next text below the view

  useEffect(() => {
    let isMounted = true;

    const animate = () => {
      Animated.parallel([
        // Animate current text to move up
        Animated.timing(currentSlideAnim, {
          toValue: -50,
          duration: 850,
          useNativeDriver: true,
        }),
        // Animate next text to move up
        Animated.timing(nextSlideAnim, {
          toValue: 0,
          duration: 850,
          useNativeDriver: true,
        }),
      ]).start(() => {
        if (isMounted) {
          setIndex((prevIndex) => (prevIndex + 1) % AnimationText.length);
          setNextIndex((prevIndex) => (prevIndex + 1) % AnimationText.length);

          // Reset animation values
          currentSlideAnim.setValue(0);
          nextSlideAnim.setValue(50);

          // Trigger the animation again after a short delay
          setTimeout(animate, 3000);
        }
      });
    };

    animate(); // Start the animation

    return () => {
      // Cleanup if component unmounts
      isMounted = false;
      currentSlideAnim.stopAnimation();
      nextSlideAnim.stopAnimation();
    };
  }, []);

  return (
    <View
      style={styles.container}
      className="justify-between items-center flex-row  p-2 rounded"
    >
      {/* Search icon wrapper */}
      <View className="justify-start items-center flex-row h-full w-40 ">
        <Icon
          name="search"
          size={16}
          color={Colors.placeHolder}
          darkColor={Colors.black}
        />
        <View className="h-full ml-1">
          <Animated.Text
            style={[
              styles.text,
              { transform: [{ translateY: currentSlideAnim }] },
            ]}
          >
            Search "{AnimationText[index]}"
          </Animated.Text>
          <Animated.Text
            style={[
              styles.text,
              { transform: [{ translateY: nextSlideAnim }] },
            ]}
          >
            Search "{AnimationText[nextIndex]}"
          </Animated.Text>
        </View>
      </View>
      {/* Microphone wrapper */}
      <View className=" items-center flex-row h-full">
        <Text
          darkColor={Colors.placeHolder}
          lightColor={Colors.placeHolder}
          className="mr-1"
        >
          |
        </Text>
        <Icon
          name="microphone"
          size={16}
          color={Colors.placeHolder}
          darkColor={Colors.black}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 35,
    overflow: "hidden",
    borderColor: Colors.whiteSecondary,
    borderWidth: 1,
    backgroundColor: Colors.whitePrimary,
  },
  text: {
    position: "absolute",
    // width: "100%",
    // textAlign: "left",
    color: Colors.placeHolder,
  },
});

export default SearchAnimationBox;
