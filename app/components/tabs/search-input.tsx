import clsx from "clsx";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icons from "../../../constants/icons";

type FormFieldProps = {
  title: string;
  value: string;
  handleChangeText: (e: any) => void;
  otherStyles?: string;
  keyboardType?: string;
};
const SearchInput = ({
  title,
  handleChangeText,
  otherStyles,
  keyboardType,
  value,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="w-full flex-row items-center  h-16 space-x-4 px-4 bg-black-100 border-2 bg-input border-input rounded-2xl focus:border-secondary">
      <TextInput
        className="mt-0.5 text-white flex items-center flex-1 font-normal text-base"
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity>
        <Image source={icons.search} resizeMode="contain" className="w-5 h-5" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
