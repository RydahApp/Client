import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const FavouritesLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="myfavourites" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#fff" style="dark" />
    </>
  );
};

export default FavouritesLayout;
