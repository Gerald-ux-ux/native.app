import React from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;
  titleStyles: string;
  containerStyles: string;
};
const InfoBox = ({ title, containerStyles, titleStyles }: Props) => {
  return (
    <View>
      <Text>InfoBox</Text>
    </View>
  );
};

export default InfoBox;
