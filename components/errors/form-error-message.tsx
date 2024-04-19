import { Text, View } from "react-native";

export default function FormErrorMessage({ message }: { message: string }) {
  return (
    <View className=" truncate rounded-lg  p-2 mt-5 text-center text-base">
      <Text className="text-center text-red-500"> {message} </Text>
    </View>
  );
}
