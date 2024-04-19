import { View, Text, Image } from "react-native";
import React from "react";
import images from "../../../constants/images";

type EmptyStateProps = {
  title: string;
  description: string;
};
const EmptyState = ({ title, description }: EmptyStateProps) => {
  return (
    <View className="justify-center px-4 items-center">
      <Image
        source={images.empty}
        resizeMode="contain"
        className="w-[270px] h-[215px] "
      />
    </View>
  );
};

export default EmptyState;
