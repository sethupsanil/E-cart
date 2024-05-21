import React, { useEffect, useState } from "react";
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

  const currentSlideAnim = new Animated.Value(0); // Initial value for the current text
  const nextSlideAnim = new Animated.Value(50); // Initial value for the next text below the view

  useEffect(() => {
    let isMounted = true;

    const animate = () => {
      Animated.parallel([
        // Animate current text to move up
        Animated.timing(currentSlideAnim, {
          toValue: -50,
          duration: 2000,
          useNativeDriver: true,
        }),
        // Animate next text to move up
        Animated.timing(nextSlideAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        if (isMounted) {
          setIndex(nextIndex);
          setNextIndex((prevIndex) => (prevIndex + 1) % AnimationText.length);

          // Reset animation values
          currentSlideAnim.setValue(0);
          nextSlideAnim.setValue(50);

          // Trigger the animation again after a short delay
          setTimeout(animate, 1000);
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
  }, [nextIndex]);

  return (
    <View className="relative h-[25px] overflow-hidden border rounded p-1">
      <Animated.Text
        style={[styles.text, { transform: [{ translateY: currentSlideAnim }] }]}
      >
        Search {AnimationText[index]}
      </Animated.Text>
      <Animated.Text
        style={[styles.text, { transform: [{ translateY: nextSlideAnim }] }]}
      >
        Search {AnimationText[nextIndex]}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    width: "100%",
    textAlign: "left",
  },
});

export default SearchAnimationBox;
