import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_900Black,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthProvider } from "@/context/authContext";
import Main from "@/navigation/main";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_300Light,
    Inter_900Black,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <AuthProvider>
      <NavigationContainer>
        <Main />
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthProvider>
  );
}
