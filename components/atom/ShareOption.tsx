import { ShareOptionProps } from "@/interfaces/Atom.interface";
import { Icon } from "@ATOM/Icon";
import React from "react";
import { Alert, Share, TouchableOpacity } from "react-native";

const ShareOption = ({ message, title, url }: ShareOptionProps) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message,
        url,
        title,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <TouchableOpacity onPress={onShare}>
      <Icon name="share" size={20} />
    </TouchableOpacity>
  );
};

export default ShareOption;
