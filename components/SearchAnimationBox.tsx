import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";

const AnimationText = [
  "Rice",
  "Chocolate",
  "Drinks",
  "Fruits",
  "Vegetables",
  "Meat",
  "Fish",
  "Spices",
  "Bakery",
  "Dairy",
  "Frozen",
  "Canned",
  "Snacks",
  "Sweets",
  "Others",
];

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
      className="justify-center border p-2 rounded"
    >
      <Animated.Text
        style={[styles.text, { transform: [{ translateY: currentSlideAnim }] }]}
      >
        Search "{AnimationText[index]}"
      </Animated.Text>
      <Animated.Text
        style={[styles.text, { transform: [{ translateY: nextSlideAnim }] }]}
      >
        Search "{AnimationText[nextIndex]}"
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 35,
    overflow: "hidden",

    backgroundColor: "#f0f0f0",
  },
  text: {
    position: "absolute",
    width: "100%",
    textAlign: "left",
  },
});

export default SearchAnimationBox;
