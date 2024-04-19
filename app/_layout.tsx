import React, { useEffect } from "react";
import { Slot, SplashScreen, Stack } from "expo-router";
import GlobalProvider from '../context/GlobalProvide'
import useFont from "./hooks/useFont";
const RootLayout = () => {
    const { fontsLoaded, error } = useFont();

    useEffect(() => {
      if (error) throw error;

      if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return;
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="/ser" options={{ headerShown: false }} /> */}
      </Stack>
    </GlobalProvider>
  );
};

export default RootLayout;
