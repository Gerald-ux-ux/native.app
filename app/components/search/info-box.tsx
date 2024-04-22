import clsx from "clsx";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
  titleStyles: string;
  containerStyles?: string;
  subtitle?: string;
};
const InfoBox = ({ title, containerStyles, titleStyles, subtitle }: Props) => {
  return (
    <View className={containerStyles}>
      <Text
        className={clsx("text-white text-center font-semibold", titleStyles)}
      >
        {title}
      </Text>
      <Text className={clsx("text-sm text-gray-100 text-center font-normal")}>
        {subtitle}
      </Text>
    </View>
  );
};

export default InfoBox;
