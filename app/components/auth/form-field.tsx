import clsx from "clsx";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

type FormFieldProps = {
  title: string;
  value: string;
  handleChangeText: (e: any) => void;
  otherStyles?: string;
  keyboardType?: string;
  placeholder?: string;
};
const FormField = ({
  title,
  handleChangeText,
  otherStyles,
  keyboardType,
  value,
  placeholder,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={clsx("space-y-2", otherStyles)}>
      <Text className="text-base text-gray-100 font-medium">{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 border-2 bg-input border-input rounded-2xl focus:border-secondary">
        <TextInput
          className="flex-1 text-white font-semibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
      </View>
    </View>
  );
};

export default FormField;
