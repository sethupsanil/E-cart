import { Text, View } from "@COMPONENTS/Themed";
import Colors from "@CONSTANTS/Colors";
import { CategoryListProps } from "@INTERFACES/CategoryList.interface";
import { Dimensions, Image } from "react-native";
import AnimatedView from "./AnimatedView";

const CategoryList = ({ data, title, containerClass }: CategoryListProps) => {
  const { width } = Dimensions.get("window");
  const imageWidth = Math.floor(width / 3 - 50);
  return (
    <View className={containerClass}>
      {/* Title */}
      <Text className="text-lg font-bold" lightColor={Colors.light.text}>
        {title}
      </Text>
      <View className="flex flex-row flex-wrap  items-center ">
        {data.map((item, index) => (
          <AnimatedView key={index}>
            <View className="flex">
              {/* Image */}
              <View
                className=" h-[90px] rounded-lg mr-[10px] items-center justify-center"
                lightColor={Colors.tintColorLight}
                darkColor={Colors.tintColorLight}
                style={{ width: imageWidth }}
              >
                <Image
                  source={{ uri: item.image }}
                  resizeMode="cover"
                  className={`w-[80%] h-[80%]  rounded-lg `}
                />
              </View>
              {/* Category name */}
              <View
                className=" min-h-[50px] justify-start items-center mt-1"
                style={{ width: imageWidth }}
              >
                <Text className="text-ellipsis text-xs  font-pregular">
                  {item?.category || ""}
                </Text>
              </View>
            </View>
          </AnimatedView>
        ))}
      </View>
    </View>
  );
};

export default CategoryList;
