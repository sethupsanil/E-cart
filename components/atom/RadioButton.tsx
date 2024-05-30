// import { RadioButtonProps } from "@/interfaces/Atom.interface";
import React from "react";
import { RadioGroup, RadioGroupProps } from "react-native-radio-buttons-group";

const RadioButton = ({ radioButtons, ...prop }: RadioGroupProps) => {
  const handleOnPress = (id: any) => {
    if (prop.onPress) {
      prop.onPress(id);
    }
  };
  return (
    <RadioGroup
      layout={prop.layout}
      radioButtons={radioButtons}
      containerStyle={prop.containerStyle}
      labelStyle={prop.labelStyle}
      onPress={handleOnPress}
      selectedId={prop.selectedId}
    />
  );
};

export default RadioButton;
