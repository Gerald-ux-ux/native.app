import { Link, router, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useFont from "./hooks/useFont";
import images from "../constants/images";
import CustomButton from "./components/custom-btn";

export default function App() {
  const { fontsLoaded, error } = useFont();

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return;
  return (
    // Ensure that content does not overlap
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center items-center  px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] w-full h-[300px]"
          />

          <View>
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute  -bottom-2 -right-8  "
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm text-gray-100  mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            text="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
