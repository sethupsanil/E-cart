import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

import { Icon, View } from "@COMPONENTS/Themed";
import Colors from "@CONSTANTS/Colors";

import { BottomSheetProps } from "@INTERFACES/BottomSheet.interface";
import Modal from "react-native-modal";

const BottomSheet = (props: BottomSheetProps) => {
  const [isModalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(props.isVisible);
  }, [props.isVisible]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const onSwipeHandler = (percentageShown: number) => {
    // console.log("Swipe Move", Math.floor(percentageShown * 100));
  };
  return (
    <Modal
      isVisible={isModalVisible}
      style={{ justifyContent: "flex-end", margin: 0 }}
      panResponderThreshold={2}
      backdropOpacity={0.7}
    >
      <View
        style={{
          backgroundColor: "rgba(0,0,0)",
          height: "100%",
          width: "100%",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        {/* Close icon */}
        <View className="items-center mt-20 ">
          <TouchableOpacity onPress={toggleModal}>
            <View
              className="w-[40px] h-[40px]  rounded-full items-center justify-center"
              lightColor={Colors.white}
              darkColor={Colors.placeHolder}
            >
              <Icon name="close" size={24} />
            </View>
          </TouchableOpacity>
        </View>
        {/* Close icon ends */}
        {/* Child modal */}
        <Modal
          isVisible={true}
          swipeDirection="down"
          onSwipeMove={onSwipeHandler}
          style={{ justifyContent: "flex-end", margin: 0 }}
          //   onSwipeComplete={() => console.log("swipe complete")}
          //   swipeThreshold={90}
        >
          <View
            style={{
              backgroundColor: "white",
              height: "80%",
              width: "100%",
              borderRadius: 20,
            }}
          >
            {props.renderItem}
          </View>
        </Modal>
        {/* Child modal end */}
      </View>
    </Modal>
  );
};

export default BottomSheet;
