import { Link } from "expo-router";
import { Text, View } from "react-native";

type FooterProps = {
  text: string;
  action: string;
  link: string;
};
export default function Footer({ text, action, link }: FooterProps) {
  return (
    <View className="justify-center pt-5 flex-row gap-2">
      <Text className="text-lg text-gray-100  mt-7 font-normal">{text}</Text>
      <Link href={link} className="text-secondary font-semibold text-lg">
        {action}
      </Link>
    </View>
  );
}
