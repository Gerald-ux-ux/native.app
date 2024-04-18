import { Link, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useFont from "./hooks/useFont";

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

    </SafeAreaView>
  );
}
