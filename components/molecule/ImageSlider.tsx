import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const ImageSlider = ({ images }: { images: string[] }) => {
  const { width } = Dimensions.get("window");
  const height = width * 0.7;

  const [active, setActive] = useState(0);
  const [borderRadius, setBorderRadius] = useState(20);
  const scrollRef: any = useRef(null);

  const onScrollChange = ({ nativeEvent }: any) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  const gotoSlide = (index: number) => {
    if (index === active) {
      return;
    }
    setActive(index);
    scrollRef.current.scrollTo({
      x: index * width,
      animated: true,
    });
  };
  return (
    <View className="p-0   rounded-t-[20px] " style={{ height, width }}>
      <ScrollView
        ref={scrollRef}
        pagingEnabled
        horizontal
        onScroll={onScrollChange}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScrollBeginDrag={(event) => {
          setBorderRadius(0);
        }}
        onScrollEndDrag={() => setBorderRadius(20)}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{
              width,
              height,
              resizeMode: "cover",
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
            }}
          />
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        {images.map((i, k) => (
          <TouchableWithoutFeedback key={k} onPress={() => gotoSlide(k)}>
            <Text style={k == active ? styles.activeDot : styles.dot}>•</Text>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: -20,
    alignSelf: "center",
  },
  dot: {
    color: "#888",
    fontSize: 50,
  },
  activeDot: {
    color: "#FFF",
    fontSize: 50,
  },
});

export default ImageSlider;
