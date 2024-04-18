import clsx from "clsx";
import { Text, TouchableOpacity } from "react-native";

type BtnProps = {
  text: string;
  handlePress: () => void;
  containerStyles: string;
  isLoading?: boolean;
  textStyles?: string;
};
export default function CustomButton({
  text,
  handlePress,
  containerStyles,
  isLoading,
  textStyles,
}: BtnProps) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={clsx(
        "bg-secondary rounded-xl min-h-[62px] justify-center items-center ",
        containerStyles,
        isLoading ? "opacity-50" : ""
      )}
      disabled={isLoading}
    >
      <Text className={clsx("text-primary font-semibold text-lg", textStyles)}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
