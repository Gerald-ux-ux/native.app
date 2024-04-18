import clsx from "clsx";
import { Image, ImageSourcePropType, Text, View } from "react-native";

type TabIconProps = {
  focused: boolean;
  color: string;
  name: string;
  icon: ImageSourcePropType;
};

export default function TabIcon({ icon, color, name, focused }: TabIconProps) {
  return (
    <View className="items-center bg  gap-2 justify-center">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-5 h-5"
      />
      <Text
        style={{ color: color }}
        className={clsx(focused ? "font-semibold" : "font-normal", "text-xs")}
      >
        {name}
      </Text>
    </View>
  );
}
