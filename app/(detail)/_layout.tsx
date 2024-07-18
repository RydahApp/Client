import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const DetailLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="product/[slug]" options={{ headerShown: false }} />
        <Stack.Screen name="notification/notify" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#fff" style="dark" />
    </>
  );
};

export default DetailLayout;
