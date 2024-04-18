import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import useFont from "./hooks/useFont";
import { useEffect } from "react";
import { Link, SplashScreen } from "expo-router";

export default function App() {
  const { fontsLoaded, error } = useFont();

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return;
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text style={{ fontFamily: "Poppins-Black" }} className="text-3xl ">
        Aora!
      </Text>
      <Link href="/home">Go home</Link>
      <StatusBar style="auto" />
    </View>
  );
}
