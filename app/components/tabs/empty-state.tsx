import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

import images from "../../../constants/images";
import CustomButton from "../custom-btn";

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
      <Text className="text-white mt-2  font-semibold text-xl text-center">
        {title}
      </Text>
      <Text className="text-gray-100 text-sm font-medium"> {description} </Text>
      <CustomButton
        text="Create Video"
        containerStyles="w-full my-5"
        handlePress={() => router.push("/create")}
      />
    </View>
  );
};

export default EmptyState;
